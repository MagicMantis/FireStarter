import { IncomeComponent } from '../income/income.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'paycheck',
  templateUrl: './paycheck.component.html',
  styleUrls: ['./paycheck.component.css'],
})
export class PaycheckComponent extends IncomeComponent {

  value: any;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  get type() : string {
    return "paycheck"
  }

}
