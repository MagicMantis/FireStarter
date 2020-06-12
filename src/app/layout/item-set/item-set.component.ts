import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Investment } from '../../model/investment';
import { PaycheckComponent } from '../../items/paycheck/paycheck.component';
import { Expense } from '../../model/expense';
import { Mortgage } from '../../model/mortgage';
import { Income } from '../../model/income';
import { Paycheck } from 'src/app/model/paycheck';
import { Item } from '../../model/item';
import { IncomeComponent } from '../../items/income/income.component';
import { ExpenseComponent } from '../../items/expense/expense.component';
import { MortgageComponent } from '../../items/mortgage/mortgage.component';
import { InvestComponent } from '../../items/invest/invest.component';

@Component({
  selector: 'item-set',
  templateUrl: './item-set.component.html',
  styleUrls: ['./item-set.component.css']
})
export class ItemSetComponent implements OnInit {

  @Input('itemListIndex') itemListIndex : number;
  itemList : Item[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.cast.subscribe(items => {
      this.itemList = items[this.itemListIndex];
    });
  }
  
  getItemType(item) {
    if (item instanceof Paycheck) {
      return PaycheckComponent
    }
    else if (item instanceof Income) {
      return IncomeComponent
    }
    else if (item instanceof Expense) {
      return ExpenseComponent
    }
    else if (item instanceof Mortgage) {
      return MortgageComponent
    }
    else if (item instanceof Investment) {
      return InvestComponent
    }
    else {
      console.log("failed to get component for item: ", item);
    }
  }

}
