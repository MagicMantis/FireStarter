import { Item } from '../model/item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Income } from '../model/income';
import { Expense } from '../model/expense';
import { Mortgage } from '../model/mortgage';
import { Paycheck } from '../model/paycheck';
import { EventEmitter } from '@angular/core';

export const YEARS = 40;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsList : Item[][] = []
  items = new BehaviorSubject<Item[]>(this.itemsList[0]);
  cast = this.items.asObservable();

  updatedItem = new EventEmitter();
  simulated = new EventEmitter();

  constructor() {

  }

  addItem(item, listIndex = 0) {
    this.itemsList.push(item)
    this.items.next(this.itemsList[listIndex])
  }

  updateItem() {
    this.updatedItem.emit('');
  }

  removeItem(item, listIndex = 0) {
    this.itemsList.splice(this.itemsList.indexOf(item), 1)
    this.items.next(this.itemsList[listIndex])
  }

  simulate(listIndex = 0) : any {
    let data = [] //return string
    let simItems = this.getSimulatedItems(listIndex);
    console.log("SIM",simItems)

    // calculate net worth at the start
    let netWorth = 0
    simItems.forEach(item => {
      netWorth += item.value
    });
    data.push(netWorth) //push first year with initial value
    
    // for tracking the beginning and ending cashflow
    let cashFlowDelta = { 
      begin: 0,
      end: 0
    }

    //for each month in the simulation
    for (let i = 0; i < YEARS * 12; i++) {

      let cashFlow = 0
      // for each item in simulation
      simItems.forEach(item => {
        cashFlow += item.monthlyValue
        netWorth += cashFlow;

        netWorth -= item.value
        item.simulate()
        netWorth += item.value
      })

      if (i == 0) cashFlowDelta.begin = cashFlow;
      if (i == YEARS * 12 - 1) cashFlowDelta.end = cashFlow;
      cashFlow = 0;

      //every year push the value to the stack
      if (i % 12 == 11) {
        data.push(Math.round(netWorth))
      } 

    }
    console.log(data)
    this.simulated.emit(cashFlowDelta);
    return data
  }

  private getSimulatedItems(listIndex) : Item[] {
    let items: Item[] = []
    this.itemsList[listIndex].forEach(item => {
      let simulatedItem : Item = item.copy()
      items.push(simulatedItem)
    });
    return items;
  }
}
