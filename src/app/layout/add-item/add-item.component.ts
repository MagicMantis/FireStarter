import { ItemBuffetComponent } from './../item-buffet/item-buffet.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input('icon') icon: string;
  @Input('itemListIndex') itemListIndex: number;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ItemBuffetComponent, {
      data: {
        itemListIndex: this.itemListIndex
      }
    });
  }

}
