import { Icart, IproductCard } from '../../../model/shared.model';
import { SharedService } from '../../../service/shared.service';
import { Router } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { WishlistService } from '../../../service/wishlist.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit, OnDestroy {
  constructor(
    private service: SharedService,
    private wishlistService: WishlistService,
    private router: Router
  ) {}

  @Input() card: IproductCard = {
    id: 0,
    name: '',
    price: 0,
    oldPrice: 0,
    smallDesc: '',
    imgs: [],
    alt: '',
    path: '',
    offer: 0,
    description: [],
    quantity: 0,
    brand: '',
  };

  private isToWishlist$ = new BehaviorSubject<boolean>(false);
  public isToWishlist = this.isToWishlist$.asObservable();

  ngOnInit(): void {
    if (this.service.isLoggedIn()) {
      this.wishlistService.getWishlist();
      this.wishlistService.wishlist.forEach((items) => {
        items.forEach((item) => {
          if (item.id === this.card.id && item.path === this.card.path) {
            this.isToWishlist$.next(true);
          }
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.wishlistService.completeSubject();
  }

  public addToWishlist(card: IproductCard): void {
    if (this.service.isLoggedIn()) {
      this.wishlistService.addToWishlist(card);
      this.isToWishlist$.next(true);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
