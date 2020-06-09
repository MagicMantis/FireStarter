import { Item } from '../model/item';
import { Injectable } from '@angular/core';
import { Observable, observable, from, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import {  } from 'rxjs'
import { Income } from '../model/income';
import { Expense } from '../model/expense';
import { Mortgage } from '../model/mortgage';
import { Paycheck } from '../model/paycheck';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsList : Item[] = []
  items = new BehaviorSubject<Item[]>(this.itemsList);
  cast = this.items.asObservable();

  constructor() {

  }

  addItem(item) {
    this.itemsList.push(item)
    this.items.next(this.itemsList)
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
      console.log(value)

      let income = 0
      let expense = 0
      console.log(typeof income, income)
      this.itemsList.forEach(item => {

        if (item instanceof Paycheck) {
          income += item.income;
          console.log(item.salary)
          console.log("pay", income)
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
