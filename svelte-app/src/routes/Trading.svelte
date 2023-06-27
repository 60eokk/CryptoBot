<script>
  import { onMount } from 'svelte';
  import { Link, Router } from 'svelte-routing';

  let cryptocurrencies = [];

  onMount(async () => {
    const response = await fetch('http://localhost:3000/cryptocurrencies');
    cryptocurrencies = await response.json();
  });
</script>

<h1>Trading</h1>

<ul>
  {#each cryptocurrencies as crypto}
    <li><Link to={`/trading/${crypto}`}>{crypto}</Link></li>
  {/each}
</ul>

<Router>
  <Detail path="/:crypto" />
</Router>
