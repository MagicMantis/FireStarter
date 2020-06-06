import { Component, OnInit } from '@angular/core';
import { Income } from './../../model/income';
import { Paycheck } from 'src/app/model/paycheck';

@Component({
  selector: 'paycheck',
  templateUrl: './paycheck.component.html',
  styleUrls: ['./paycheck.component.css'],
})
export class PaycheckComponent implements OnInit {

  paycheck: Paycheck;
  salaryString: string

  constructor() { 
    this.paycheck = new Paycheck("", 0, 0) 
  }

  ngOnInit(): void {
  }

  get type() : string {
    return "paycheck"
  }

  parse() {
    this.paycheck.salary = +this.salaryString;
    console.log(this.paycheck.salary)
  }

}
