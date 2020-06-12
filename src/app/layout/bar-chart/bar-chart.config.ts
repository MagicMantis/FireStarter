import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

export const barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          suggestedMin: 0,
        }
      }]
    }
  };

export const barChartType: ChartType = 'bar';
export const barChartLegend = true;
export const barChartPlugins = [];
export const barChartColors = [
{
    backgroundColor: '#4CAF50'
}
];

export const barChartData: ChartDataSets[] = [
{ data: [], label: "" }
];