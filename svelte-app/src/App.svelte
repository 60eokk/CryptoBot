<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Trading from "./routes/Trading.svelte";
  import Strategy from "./routes/Strategy.svelte";
  import Contact from "./routes/Contact.svelte";
  import Detail from "./routes/Detail.svelte";
</script>
  
<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/trading">Trading</Link>
    <Link to="/strategy">Strategy</Link>
    <Link to="/contact">Contact</Link>
  </nav>
  <Route path="/" component={Home} />
  <Route path="/trading" let:params component={Trading} />
  <Route path="/trading/:id" let:params component={Detail} />
  <Route path="/strategy" component={Strategy} />
  <Route path="/contact" component={Contact} />
</Router>
