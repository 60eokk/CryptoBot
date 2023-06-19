<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from './routes/Home.svelte';
  import Trading from './routes/Trading.svelte';
  import Strategy from './routes/Strategy.svelte';
  import Contact from './routes/Contact.svelte';
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/trading">Trading</Link>
    <Link to="/strategy">Strategy</Link>
    <Link to="/contact">Contact</Link>
  </nav>
  
  <div>
    <Route path="/" component="{Home}" />
    <Route path="/trading" component="{Trading}" />
    <Route path="/strategy" component="{Strategy}" />
    <Route path="/contact" component="{Contact}" />
  </div>
</Router>
