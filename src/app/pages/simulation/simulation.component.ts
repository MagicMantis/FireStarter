import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  constructor(private data : DataService) { 

  }

  ngOnInit(): void {

  }

  getItemCount()  {
    return this.data.getItemCount();
  }

}
