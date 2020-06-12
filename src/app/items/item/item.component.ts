import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input('item') item: Item;
  @Input('title') title: string;
  @Input('subtitle') subtitle: string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  removeItem(item) {
    this.data.removeItem(item);
  }

}
