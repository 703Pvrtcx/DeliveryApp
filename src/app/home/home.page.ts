import { CartService } from './../services/cart/cart.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  cat = {} as Cat;
  cartList =[];

  constructor(private cartDao: CartService, private router: Router) {

    this.cartList = this.cartDao.getCart();
    //this.router.navigateByUrl('detail');
  }
  submit(){
    this.cartDao.addToCart(this.cat);
    console.log('Cat List', this.cartDao.getCart());
  }
  goNext(){

    this.router.navigateByUrl('detail');

  }

}
