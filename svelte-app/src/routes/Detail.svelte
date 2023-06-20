<script>
  import { onMount } from 'svelte';
  import { getContext } from 'svelte';
  import LineChart from '../components/LineChart.svelte';
  const { params } = getContext('routing');

  let data = []; // This would hold the price history
  let labels = []; // This will hold the labels for the chart

  onMount(async () => {
    // Fetch the price history using params.id
    const response = await fetch(`/api/price_history/${params.id}`);
    data = await response.json();

    // Create labels for the data points
    labels = data.map((_, index) => index);
  });
</script>

<h1>{params.id}</h1>
<LineChart {labels} {data} />
