import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icart, Iregister, IproductCard } from '../model/shared.model';
import { BehaviorSubject, tap, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';

  private arryOfwishlist: Icart[] = [];
  private wishlist$ = new BehaviorSubject<Icart[]>([]);
  public wishlist = this.wishlist$.asObservable();

  private numOfProducts$ = new BehaviorSubject<number>(0);
  public numOfProducts = this.numOfProducts$.asObservable();

  private subject$ = new Subject();

  public completeSubject(): void {
    this.subject$.next(true);
    this.subject$.complete();
  }

  private updateWishlist(data: Icart[]): void {
    this.http
      .patch(this.baseUrl + '/users/' + localStorage.getItem('id'), {
        wishlist: data,
      })
      .subscribe();
  }

  public pushInWishlist(data: Icart[]): void {
    this.arryOfwishlist = data;
    this.numOfProducts$.next(data.length);
    this.updateWishlist(this.arryOfwishlist);
  }

  public addToWishlist(data: IproductCard): void {
    let arr: Icart[] = [];

    this.wishlist$
      .pipe(
        takeUntil(this.subject$),
        tap((wishlistData) => {
          arr = wishlistData;
        })
      )
      .subscribe();

    arr.push(data as Icart);

    this.pushInWishlist(arr);
  }

  public getWishlist(): void {
    this.http
      .get<Iregister>(this.baseUrl + '/users/' + localStorage.getItem('id'))
      .pipe(
        tap((data) => {
          this.wishlist$.next(data.wishlist);
          this.numOfProducts$.next(data.wishlist.length);
        })
      )
      .subscribe();
  }

  public deleteProduct(products: Icart[]): void {
    this.wishlist$.next(products);
    this.updateWishlist(products);
    this.numOfProducts$.next(products.length);
  }

  public removeFromWishlist(item: Icart): void {
    let arr: Icart[] = [];

    this.wishlist$
      .pipe(
        takeUntil(this.subject$),
        tap((data) => {
          arr = data.filter((data) => data !== item);
        })
      )
      .subscribe();

    this.deleteProduct(arr);
  }

  public resetWishlist(): void {
    this.arryOfwishlist = [];
    this.wishlist$.next([]);
    this.numOfProducts$.next(0);
  }
}
