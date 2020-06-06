import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  mortgage: string

  constructor() { }

  ngOnInit(): void {
  }

}
