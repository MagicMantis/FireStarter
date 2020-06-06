import { ItemComponent } from './../layout/item/item.component';
import { DataService } from './../services/data.service';
import { PaycheckComponent } from './../paycheck/paycheck.component';
import { Component, OnInit } from '@angular/core';
import { IncomeComponent } from '../income/income.component';

@Component({
  selector: 'simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  itemList: ItemComponent[] = []

  constructor(private data : DataService) { 

  }

  ngOnInit(): void {
    this.data.cast.subscribe(items => {
      console.log(items)
      this.itemList = items;
    });
  }
  

}
