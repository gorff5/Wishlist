import { WishlistService } from '../wishlist.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.scss']
})
export class WishlistListComponent implements OnInit {
  items: Array<any> = [] ;
  constructor(private wishListServer: WishlistService, private router: Router) { }

  ngOnInit() {
    this.wishListServer.getData().subscribe((data) => this.items.push(data));
  }
  editItem(item){
    this.router.navigate(['/edit', item.id]);
  }
  
}
