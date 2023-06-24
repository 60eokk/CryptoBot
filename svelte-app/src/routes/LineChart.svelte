<script>
  import { onMount, onDestroy } from 'svelte';
  import { Chart, LinearScale, TimeScale, LineController, PointElement, LineElement, Title } from 'chart.js';
  import 'chartjs-adapter-date-fns';

  Chart.register(LinearScale, TimeScale, LineController, PointElement, LineElement, Title);


  export let data = [];
  
  let ctx;
  let chart;

  onMount(() => {
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          data: data,
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