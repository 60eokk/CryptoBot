<script>
  import { onMount, onDestroy } from 'svelte';
  import { Chart } from 'chart.js';

  export let data = [];
  export let labels = [];

  let canvas;
  let chart;

  onMount(() => {
    chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Price',
            data: data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            lineTension: 0.1
          }
        ]
      }
    });
  });

  onDestroy(() => {
    chart.destroy();
  });
</script>

<canvas bind:this={canvas} />
