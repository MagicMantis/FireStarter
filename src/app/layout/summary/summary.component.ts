import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  beginCashFlow: number;
  endCashFlow: number;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.simulated.subscribe(result => {
      this.beginCashFlow = result.begin;
      this.endCashFlow = result.end;
    });
  }

}
