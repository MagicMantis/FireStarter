import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  private label = "Income Over Time";

  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[]
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors = [
    {
      backgroundColor: '#4CAF50'
    }
  ];

  barChartData: ChartDataSets[] = [
    { data: [], label: this.label }
  ];

  constructor(private data: DataService) {
    this.barChartLabels = this.getLabels();
  }

  ngOnInit() {
    this.data.cast.subscribe(item => {
      this.updateData()
    })
  }

  getLabels() : any[] {
    let labels = []
    for (let i = 0; i < 20; i++) {
      labels.push((2020+i).toString());
    }
    return labels;
  }

  updateData() {
    let data = this.data.simulate()
    this.barChartData = [
      { data: data, label: this.label }
    ];
  }
}