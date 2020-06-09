import { DataService } from './../../services/data.service';
import { Investment } from './../../model/investment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {

  @Input('item') invest: Investment
  initialString: string
  rateString: string
  additionalContribString: string

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  parse() {
    this.invest.initial = +this.initialString
    this.invest.annualRate = +this.rateString
    this.invest.additionalContrib = +this.additionalContribString
    this.data.updateItem()
  }
}
