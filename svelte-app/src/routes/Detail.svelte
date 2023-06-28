<script>
  import { onMount } from 'svelte';
  import { getContext } from 'svelte';
  import LineChart from './LineChart.svelte';

  let cryptoData = [];

  onMount(async () => {
    const { route } = getContext('svelte-routing');
    const params = route.params; // access route params
    const res = await fetch(`http://localhost:3000/cryptocurrencies/${params.crypto}/history`);
    cryptoData = await res.json();
  });
</script>

<h1>{cryptoData.name}</h1>
<LineChart data={cryptoData.data} />
