<script>
  import { onMount } from 'svelte';
  import { Route } from 'svelte-routing';
  import LineChart from './LineChart.svelte';

  let cryptoData = [];

  let name = "";

  function setName(params) {
    name = params.cryptocurrency;  // replace 'crypto' with your actual param name
    fetchCryptoData();
  }

  async function fetchCryptoData() {
    const res = await fetch(`http://localhost:3000/cryptocurrencies/${name}`);
    cryptoData = await res.json();
  }

  onMount(fetchCryptoData);
</script>

<Route let:params={setName}>
  <h1>{name}</h1>
  <LineChart data= {cryptoData} />  
</Route>
