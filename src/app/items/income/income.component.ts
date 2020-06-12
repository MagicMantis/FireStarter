import { DataService } from './../../services/data.service';
import { Income } from './../../model/income';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  @Input('item') income: Income
  @Input('itemListIndex') itemListIndex : number;
  incomeString: string;

  constructor(private data: DataService) { 
  }

  ngOnInit(): void {
    
  }

  parse() {
    this.income.income = +this.incomeString
    this.data.updateItem()
  }

}
