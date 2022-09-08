import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/service/shared.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../../shared/service/cart.service';
import { WishlistService } from '../../../shared/service/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(
    private service: SharedService,
    private cartService: CartService,
    private router: Router,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.service.isLoggedIn();
    this.service.getName();
    this.name = this.service.name;
    this.isLoggedIn = this.service.isSignUp;
    this.cartNum = this.cartService.numOfProducts;
    this.wishlistNum = this.wishlistService.numOfProducts;
    if (this.service.isLoggedIn()) {
      this.cartService.getCart();
      this.wishlistService.getWishlist();
    }
  }

  public isLoggedIn = new Observable<boolean>();

  public cartNum = new Observable<number>();

  public wishlistNum = new Observable<number>();

  public name = new Observable<string>();

  public logOut(): void {
    this.cartService.resetCart();
    this.wishlistService.resetWishlist();
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.service.isLoggedIn();
    this.service.getName();
    this.router.navigateByUrl('/login');
  }
}
