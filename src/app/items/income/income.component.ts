import { Income } from './../../model/income';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  @Input('income') income: Income
  incomeString: string

  constructor() { 
    this.incomeString = ""
  }

  ngOnInit(): void {
    
  }

  parse() {
    this.income.income = +this.incomeString
  }

}
