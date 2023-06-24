<!-- Detail.svelte -->
<script>
  import { onMount } from 'svelte';
  import { getContext } from 'svelte';
  import LineChart from './LineChart.svelte';

  let data = [];
  let params = getContext('svelte-routing').params;
  
  $: {
    fetch(`http://localhost:3000/prices/${params.pair}`)
      .then(res => res.json())
      .then(json => data = json);
  }
</script>

<LineChart {data} />
