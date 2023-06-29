<script>
  import { onMount } from 'svelte';
  import LineChart from './LineChart.svelte';

  export let location;

  let data = [];
  let id;

  onMount(async () => {
    id = location.pathname.split("/").pop();
    const response = await fetch(`https://api.kraken.com/0/public/OHLC?pair=${id}&interval=1440`);
    const { result } = await response.json();
    const key = Object.keys(result)[0];
    data = result[key].map(datum => ({x: datum[0]*1000, y: datum[4]}));
  });
</script>

<h2>{id} Chart</h2>
<LineChart {data} />


//havent tried the last code on chatgpt. start with that!