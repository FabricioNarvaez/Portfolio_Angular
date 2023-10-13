import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuActivated = false;
  toggleMenu() {
    this.isMenuActivated = !this.isMenuActivated;
  }

  closeMenu() {
    this.isMenuActivated = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
