<script>
  import { onMount } from 'svelte';
  import LineChart from './LineChart.svelte';

  export let params;

  let data = [];
  let id;

  $: if(params && params.id) {
    id = params.id;
    fetchOHLCData();
  }

  async function fetchOHLCData() {
    const response = await fetch(`https://api.kraken.com/0/public/OHLC?pair=${id}&interval=1440`);
    const { result } = await response.json();
    const key = Object.keys(result)[0];
    data = result[key].map(datum => ({x: datum[0]*1000, y: datum[4]}));

    console.log('Fetched data:', data);
  }

</script>

<h2>{id} Chart</h2>
<LineChart {data} />
