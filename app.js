const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
let botResults = []; // Store the results of your bot here

app.get('/results', (req, res) => {
  res.send(botResults);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
require('dotenv').config();
const apiKey = process.env.KRAKEN_API_KEY;
const apiSecret = process.env.KRAKEN_API_SECRET;

const axios = require('axios');

let priceHistory = new Map();
const N = 10; 

const handleBotResult = (pair, currentPrice, movingAverage) => {
    botResults.push({
        pair: pair,
        currentPrice: currentPrice,
        movingAverage: movingAverage,
        action: (currentPrice > movingAverage) ? 'Sell' : 'Buy'
    });
    console.log('Size of botResults: ', botResults.length); // Added this line
};

const fetchCurrentPriceAndTrade = async (pair) => {
  try {
    const response = await axios.get(`https://api.kraken.com/0/public/Ticker?pair=${pair}`);
    const data = response.data;
    const currentPrice = parseFloat(data.result[pair].c[0]);

    if (!priceHistory.has(pair)) {
      priceHistory.set(pair, []);
    }

    let prices = priceHistory.get(pair);

    prices.push(currentPrice);

    if (prices.length > N) {
      prices.shift();
    }

    const movingAverage = prices.reduce((a, b) => a + b) / prices.length;

    console.log(`Pair: ${pair}, Current price: ${currentPrice}, Moving average: ${movingAverage}`);

    if (currentPrice > movingAverage) {
      console.log('Sell now');
    } else if (currentPrice < movingAverage) {
      console.log('Buy now');
    }

    handleBotResult(pair, currentPrice, movingAverage);

  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const fetchAllPrices = async () => {
  try {
      console.log('--- Fetching prices... ---');

      
      botResults = []; // RESET EACH CYCLE to prevent storage from overloading
      const response = await axios.get('https://api.kraken.com/0/public/AssetPairs');
      const data = response.data;
      const pairs = [...new Set(Object.keys(data.result))]; 
    
      console.log(`Total number of pairs: ${pairs.length}`);

      const usdPairs = pairs.filter(pair => pair.endsWith('USD')).sort((a, b) => a.localeCompare(b)); // <- sort added here


      console.log(`Total number of USD pairs: ${usdPairs.length}`);

      // Use Promise.all to wait for all requests to complete
      await Promise.all(usdPairs.map(async pair => {
          await fetchCurrentPriceAndTrade(pair);
      }));
      
      // At this point, all requests have completed and we can log the results
      console.log('All prices fetched:', botResults);

  } catch (error) {
      console.error(`Error: ${error}`);
  }
};

                        
fetchAllPrices();

setInterval(fetchAllPrices, 60 * 1000);

// log memory usage every minute
setInterval(() => {
    const { rss, heapTotal, heapUsed, external, arrayBuffers } = process.memoryUsage();
    console.log('Memory usage: ', { rss, heapTotal, heapUsed, external, arrayBuffers });
}, 1000 * 60);
