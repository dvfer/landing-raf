import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navbarCollapsed = true;
  isMenuCollapsed = true;
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
