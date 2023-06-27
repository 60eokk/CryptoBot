<script>
  import { onMount } from 'svelte';
  import { Link, Route } from 'svelte-routing';
  import Detail from './Detail.svelte';

  let cryptos = [];

  onMount(async () => {
    const res = await fetch('http://localhost:3000/cryptocurrencies');
    cryptos = await res.json();
  });
</script>

<div>
  {#each cryptos as crypto (crypto.id)}
    <Link to="{`/${crypto.name}`}">{crypto.name}</Link>
  {/each}
</div>

<Route path="/:crypto" component={Detail} />
