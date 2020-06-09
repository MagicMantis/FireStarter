import { Item } from '../model/item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Income } from '../model/income';
import { Expense } from '../model/expense';
import { Mortgage } from '../model/mortgage';
import { Paycheck } from '../model/paycheck';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsList : Item[] = []
  items = new BehaviorSubject<Item[]>(this.itemsList);
  cast = this.items.asObservable();

  updatedItem = new EventEmitter();

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

    //for each month in the 10 year simulation
    for (let i = 0; i < 120; i++) {
      let income = 0
      let expense = 0
      this.itemsList.forEach(item => {

        if (item instanceof Paycheck) {
          income += item.income;
        }
        // add income
        else if (item instanceof Income) {
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
      data.push(value)

    }
    console.log(data)
    return data
  }
}
