import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Paycheck } from 'src/app/model/paycheck';

@Component({
  selector: 'paycheck',
  templateUrl: './paycheck.component.html',
  styleUrls: ['./paycheck.component.css'],
})
export class PaycheckComponent implements OnInit {

  @Input('paycheck') paycheck : Paycheck;
  salaryString: string = '0'

  constructor(private data: DataService) { 

  }

  ngOnInit(): void {
  }

  get type() : string {
    return "paycheck"
  }

  parse() {
    this.paycheck.salary = +this.salaryString;
  }

}