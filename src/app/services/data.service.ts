import { Item } from '../model/item';
import { PaycheckComponent } from '../items/paycheck/paycheck.component';
import { Injectable } from '@angular/core';
import { Observable, observable, from, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import {  } from 'rxjs'

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
    for (let i = 0; i < 20; i++) {
      this.itemsList.forEach(item => {
        value += 1000;
      })
      data.push(value)
    }
    return data
  }
}
