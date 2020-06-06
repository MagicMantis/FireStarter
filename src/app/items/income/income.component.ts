import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  incomeString: string
  income: number

  constructor() { 
    this.incomeString = ""
    this.income = 0
  }

  ngOnInit(): void {
    
  }

  parse() {
    this.income = +this.incomeString
  }

}
