<!-- <script>
    import { onMount } from 'svelte';
  
    let data = [];
    let name = 'World'; // Added this line
  
    // Fetch data from your Express server when the component mounts
    onMount(async () => {
      try {
        const response = await fetch('http://localhost:3000/results');
        if (!response.ok) { // if HTTP-status is 200-299
          // get the error message from the server's response
          console.log('HTTP Error! status: ' + response.status);
          return;
        }
        data = await response.json();
        console.log(data); // log the data for debugging
      } catch (error) {
        console.log('Fetch error: ' + error);
      }
    });
  </script>
  
  <h1>Hello, world!</h1>
  
  {#if data.length === 0}
    <p>Fetching data...</p>
  {:else}
    {#each data as result (result.pair)}
      <p>{result.pair}: Current price is {result.currentPrice}, moving average is {result.movingAverage}, and action is {result.action}</p>
    {/each}
  {/if}
  
  <main>
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }
  
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
    }
  
    @media (min-width: 640px) {
      main {
        max-width: none;
      }
    }
  </style>
   -->


   <script>
    import { Link } from "svelte-routing";
    import { onMount } from 'svelte';
  
    let cryptos = []; // This would hold the list of cryptocurrencies
  
    onMount(async () => {
      // Fetch the list of cryptocurrencies
      const response = await fetch('/api/cryptos');
      cryptos = await response.json();
    });
  </script>
  
  {#each cryptos as crypto}
    <p><Link to={`/trading/${crypto.id}`}>{crypto.name}</Link></p>
  {/each}
  