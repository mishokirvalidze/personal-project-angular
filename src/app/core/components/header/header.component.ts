import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/service/shared.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../../shared/service/cart.service';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.isLoggedIn();
    this.isLoggedIn = this.service.isSignUp;
    this.cartNum = this.cartService.numOfProducts;
    if (this.service.isLoggedIn()) this.cartService.getCart();
  }

  public isLoggedIn = new Observable<boolean>();

  public cartNum = new Observable<number>();

  public logOut(): void {
    this.cartService.resetCart();

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.service.isLoggedIn();
    this.router.navigateByUrl('/login');
  }
}
