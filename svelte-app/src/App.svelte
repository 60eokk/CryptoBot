<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Trading from "./routes/Trading.svelte";
  import Strategy from "./routes/Strategy.svelte";
  import Contact from "./routes/Contact.svelte";
  import Detail from "./routes/Detail.svelte"; // New detail page
  </script>
  
  <Router>
    <nav>
      <a href="/">Home</a>
      <a href="/trading">Trading</a>
      <a href="/strategy">Strategy</a>
      <a href="/contact">Contact</a>
    </nav>
    <Route path="/" component={Home} />
    <Route path="/trading" component={Trading} />
    <Route path="/trading/:id" component={Detail} /> <!-- New detail route -->
    <Route path="/strategy" component={Strategy} />
    <Route path="/contact" component={Contact} />
  </Router>
  