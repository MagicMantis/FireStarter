import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  activeLink: any;
  links = [
    { name: "Home", address: "#", isActive: false },
    { name: "Compare", address: "#compare", isActive: false },
    { name: "What If?", address: "#whatif", isActive: false },
    { name: "Support", address: "#support", isActive: false },
  ];

  constructor() { }

  ngOnInit(): void {
    this.setActive(this.links[0]);
  }

  setActive(link) {
    if (this.activeLink !== undefined)
      this.activeLink.isActive = false;
    this.activeLink = link;
    link.isActive = true;
  }
}
