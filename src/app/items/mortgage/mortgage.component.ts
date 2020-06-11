import { DataService } from './../../services/data.service';
import { Mortgage } from './../../model/mortgage';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  @Input('item') mortgage: Mortgage
  homeValueString: string
  downPaymentString: string
  mortgageAmountString: string
  APYstring: string
  paymentAmountString: string;
  extraPaymentString: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.APYstring = String(this.mortgage.annualRate);
  }

  parse() {
    this.mortgage.homeValue = +this.homeValueString;
    this.mortgage.downPayment = +this.downPaymentString;

    this.mortgage.mortgageAmount = this.mortgage.homeValue - this.mortgage.downPayment;
    this.mortgageAmountString = String(this.mortgage.mortgageAmount)

    this.mortgage.monthlyPayment = this.mortgage.mortgageAmount * 1.4 / 30 / 12;
    this.paymentAmountString = String(this.mortgage.monthlyPayment)

    this.mortgage.extraPayment = +this.extraPaymentString

    this.data.updateItem();
  }

}
