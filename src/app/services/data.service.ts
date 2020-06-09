import { Item } from '../model/item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Income } from '../model/income';
import { Expense } from '../model/expense';
import { Mortgage } from '../model/mortgage';
import { Paycheck } from '../model/paycheck';
import { EventEmitter } from '@angular/core';

const YEARS = 20;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsList : Item[] = []
  items = new BehaviorSubject<Item[]>(this.itemsList);
  cast = this.items.asObservable();

  updatedItem = new EventEmitter();
  simulated = new EventEmitter();

  constructor() {

  }

  addItem(item) {
    this.itemsList.push(item)
    this.items.next(this.itemsList)
  }

  updateItem() {
    this.updatedItem.emit('');
  }

  removeItem(item) {
    this.itemsList.splice(this.itemsList.indexOf(item), 1)
    this.items.next(this.itemsList)
  }

  simulate() : any {
    let data = []
    let value = 0
    
    let result = { 
      beginCashFlow: 0,
      endCashFlow: 0
    }

    //push first year with initial value
    data.push(value)

    //for each month in the simulation
    for (let i = 0; i < YEARS * 12; i++) {

      // for each item in simulation
      this.itemsList.forEach(item => {

        let income = 0
        let expense = 0

        if (item instanceof Paycheck) {
          console.log("Adding paycheck", item.income)
          income += item.income;
        }
        // add income
        else if (item instanceof Income) {
          console.log("Adding income", item.income)
          income += item.income;
        }
        //add expense
        else if (item instanceof Expense) {
          expense += item.cost;
        }

        if (item instanceof Mortgage) {
          expense += item.monthlyPayment
        }

        value += income - expense;

      })

      if (i == 0) result.beginCashFlow = value;
      if (i == YEARS * 12 - 1) result.endCashFlow = value;

      //every year push the value to the stack
      if (i % 12 == 11) {
        data.push(value)
      } 

    }
    console.log(data)
    this.simulated.emit(result);
    return data
  }
}
