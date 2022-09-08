import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Icart } from 'src/app/shared/model/shared.model';
import { WishlistService } from '../../shared/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistComponent implements OnInit, OnDestroy {
  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.wishlistService.getWishlist();
    }, 400);

    this.wishlist = this.wishlistService.wishlist;
  }

  ngOnDestroy(): void {
    this.wishlistService.completeSubject();
  }

  public wishlist = new Observable<Icart[]>();

  public delete(item: Icart): void {
    this.wishlistService.removeFromWishlist(item);
  }

  public deleteAll(): void {
    this.wishlistService.deleteProduct([]);
  }
}
