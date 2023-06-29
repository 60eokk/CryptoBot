<script>
  import { onMount } from 'svelte';
  import { Chart, registerables } from 'chart.js';
  import 'chartjs-adapter-date-fns'; // Ensure you have installed this via npm

  Chart.register(...registerables);

  let chart;
  let canvas;

  export let data;

  onMount(() => {
    chart = new Chart(canvas.getContext('2d'), {
      type: 'line',
      data: {
        datasets: [{
          label: 'My First Dataset',
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
          }
        }
      }
    });
  });
</script>

<canvas bind:this={canvas}></canvas>
