<script>
  import { onMount } from 'svelte';
  import { Link, Router, Route } from 'svelte-routing';
  import Detail from './Detail.svelte';

  let cryptoData = [];

  onMount(async () => {
    const res = await fetch('http://localhost:3000/cryptocurrencies');
    const rawData = await res.json();
    cryptoData = Array.from(new Set(rawData));
  });
</script>

<ul>
  {#each cryptoData as item (item)}
    <li>
      <Link to={"/trading/" + item}>
        {item}
      </Link>
    </li>
  {/each}
</ul>

<Router>
  <Route path="/:crypto" component={Detail} />
</Router>
