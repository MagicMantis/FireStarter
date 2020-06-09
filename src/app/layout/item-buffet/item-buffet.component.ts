import { Paycheck } from './../../model/paycheck';
import { Income } from './../../model/income';
import { Mortgage } from './../../model/mortgage';
import { Expense } from './../../model/expense';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


export interface ItemType {
  type: string;
  icon: string;
  color: ThemePalette;
  component: any;
}

@Component({
  selector: 'item-buffet',
  templateUrl: './item-buffet.component.html',
  styleUrls: ['./item-buffet.component.css']
})
export class ItemBuffetComponent implements OnInit {

  availableItemTypes: ItemType[] = [
    {type: 'Paycheck', icon: 'attach_money', color: undefined, component: Paycheck},
    {type: 'Income', icon: 'attach_money', color: 'primary', component: Income},
    {type: 'Mortgage', icon: 'home', color: 'accent', component: Mortgage},
    {type: 'Expense', icon: 'delete', color: 'warn', component: Expense}
  ];

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  addItem(itemType) {
    this.data.addItem(new itemType)
  }

}
