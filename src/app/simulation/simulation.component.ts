import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';

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
      this.itemList = items;
    });
  }
  

}
