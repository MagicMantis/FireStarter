import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/app/model/expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  @Input('item') expense: Expense
  costString: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  parse() {
    this.expense.cost = +this.costString;
    this.data.updateItem();
  }

}
