import { DataService, YEARS } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { barChartOptions, barChartType, barChartColors, barChartData, barChartLegend, barChartPlugins } from './bar-chart.config';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  private label = "Net Worth Over Time";
  
  options: ChartOptions = barChartOptions; 
  labels: Label[];
  chartType: ChartType = barChartType;
  legend = barChartLegend;
  plugins = barChartPlugins;
  colors = barChartColors;
  dataSets: ChartDataSets[] = barChartData;

  constructor(private data: DataService) {
    this.labels = this.getLabels();
  }

  ngOnInit() {
    this.data.cast.subscribe(item => {
      this.updateData()
    })

    this.data.updatedItem.subscribe(() => {
      this.updateData()
    });
  }

  getLabels() : any[] {
    let labels = []
    for (let i = 0; i <= YEARS; i++) {
      labels.push((2020+i).toString());
    }
    return labels;
  }

  updateData() {
    let data = this.data.simulate()
    let data2 = this.data.simulate(1)
    this.dataSets = [
      { data: data, label: this.label },
      { data: data2, label: this.label }
    ];
  }
}