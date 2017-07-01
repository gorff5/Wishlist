
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  private items: MenuItem[];
  ngOnInit() {
    this.items = [
      { label: 'Wishlist', routerLink: '/' },
      { label: 'Add new wish', routerLink: '/add/new' },
    ];
  }
}
