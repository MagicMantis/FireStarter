import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


export interface ItemType {
  type: string;
  icon: string;
  color: ThemePalette;
}

@Component({
  selector: 'item-buffet',
  templateUrl: './item-buffet.component.html',
  styleUrls: ['./item-buffet.component.css']
})
export class ItemBuffetComponent implements OnInit {

  availableItemTypes: ItemType[] = [
    {type: 'Paycheck', icon: 'attach_money', color: undefined},
    {type: 'Income', icon: 'attach_money', color: 'primary'},
    {type: 'Mortgage', icon: 'home', color: 'accent'},
    {type: 'Expense', icon: 'delete', color: 'warn'}
  ];

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }

  addItem(itemType) {
    console.log(itemType);
    this.data.addItem(itemType)
  }

}
