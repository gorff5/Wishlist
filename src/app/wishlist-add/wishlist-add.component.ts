import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { WishlistService } from '../wishlist.service';
import { WishList } from '../wishlist';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-wishlist-add',
  templateUrl: './wishlist-add.component.html',
  styleUrls: ['./wishlist-add.component.scss']
})
export class WishlistAddComponent implements OnInit {
  wishList: WishList;
  id: number;
  name: string;
  details: string;
  newItem: boolean = true;
  msgs: Message[] = [];
  constructor(private wishListService: WishlistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(v => {
        if (v.hasOwnProperty('id')) {
          this.wishListService.getData().subscribe((item: any) => {
            if (+item.id === +v.id) {
              this.id = +v.id;
              this.name = item.name;
              this.details = item.details;
              this.newItem = false;
            }
          });
        }
      });
  }
  onSubmit(form: NgForm) {
    this.wishList = new WishList(this.id, this.name, this.details);
    this.wishListService.saveOrUpdateItem(this.wishList);
    this.show();
  }
  show() {
    this.msgs.push({ severity: 'success', summary: 'Wishlist Saved!', detail: '' });
  }

  hide() {
    this.msgs = [];
  }

}
