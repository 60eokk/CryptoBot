<script>
  import { onMount } from 'svelte';
  import LineChart from './LineChart.svelte';

  export let params = {};
  let cryptoData = [];

  $: if (params.name) {
    fetch(`http://localhost:3000/cryptocurrencies/${params.name}`)
      .then(res => res.json())
      .then(data => cryptoData = data);
  }
</script>

<h1>{params.name}</h1>
<LineChart data={cryptoData} />
