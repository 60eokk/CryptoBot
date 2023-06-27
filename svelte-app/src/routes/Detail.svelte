<script>
  import { onMount } from 'svelte';
  import { useParams } from 'svelte-routing'; // import useParams
  import LineChart from './LineChart.svelte';

  let cryptoData = [];

  let params = useParams(); // use useParams to get the dynamic parts of the url
  let name = "";

  onMount(async () => {
    name = params.name;
    const res = await fetch(`http://localhost:3000/cryptocurrencies/${name}`);
    cryptoData = await res.json();
  });
</script>

<h1>{name}</h1>  <!-- no need to use params.name here -->
<LineChart {data}={cryptoData} />  <!-- You need to pass cryptoData as data -->
