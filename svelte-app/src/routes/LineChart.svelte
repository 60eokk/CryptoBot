<script>
  import { onMount, onDestroy } from 'svelte';
  import { Chart, LinearScale, TimeScale, LineController, PointElement, LineElement, Title } from 'chart.js';

  Chart.register(LinearScale, TimeScale, LineController, PointElement, LineElement, Title);

  export let data = [];
  
  let ctx;
  let chart;

  onMount(() => {
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(item => item.date), // assuming each item has a 'date' property
        datasets: [{
          data: data.map(item => item.value), // assuming each item has a 'value' property
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });

  onDestroy(() => {
    if (chart) {
      chart.destroy();
    }
  });
</script>

<canvas bind:this={ctx}></canvas>
