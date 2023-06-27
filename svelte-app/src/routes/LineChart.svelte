
<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';

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