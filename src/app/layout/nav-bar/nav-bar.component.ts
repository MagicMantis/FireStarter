import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  activeLink: any;
  links = [
    { name: "Home", address: "", isActive: false },
    { name: "Simulate", address: "simulation", isActive: false },
    { name: "Compare", address: "compare", isActive: false },
    { name: "Support", address: "support", isActive: false },
    { name: "Log In", address: "login", isActive: false },
    { name: "Sign Up", address: "register", isActive: false },
    { name: "Sign Out", address: "signout", isActive: false },
    { name: "Verify", address: "verify-email-address", isActive: false },
    { name: "User", address: "user", isActive: false },
  ];

  constructor(public auth: AuthService) { }

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
