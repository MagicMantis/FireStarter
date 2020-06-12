import { Investment } from '../../model/investment';
import { PaycheckComponent } from '../../items/paycheck/paycheck.component';
import { Expense } from '../../model/expense';
import { Mortgage } from '../../model/mortgage';
import { Income } from '../../model/income';
import { Paycheck } from 'src/app/model/paycheck';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { IncomeComponent } from '../../items/income/income.component';
import { ExpenseComponent } from '../../items/expense/expense.component';
import { MortgageComponent } from '../../items/mortgage/mortgage.component';
import { InvestComponent } from '../../items/invest/invest.component';

@Component({
  selector: 'simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  itemList: Item[] = []

  constructor(private data : DataService) { 

  }

  ngOnInit(): void {
    this.data.cast.subscribe(items => {
      console.log(items)
      this.itemList = items[0];
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
