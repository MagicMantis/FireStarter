import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input('icon') icon: string;

  constructor(private data : DataService) { }

  ngOnInit(): void {
  }


}
