import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Icart, Iregister } from '../model/shared.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';

  private arryOfCart: Icart[] = [];
  private cartList$ = new BehaviorSubject<Icart[]>([]);
  public cartList = this.cartList$.asObservable();

  private numOfProducts$ = new BehaviorSubject<number>(0);
  public numOfProducts = this.numOfProducts$.asObservable();

  private subtotal$ = new BehaviorSubject<number>(0);
  public subtotal = this.subtotal$.asObservable();

  public count(): void {
    let subTotal = 0;

    this.cartList.forEach((items) => {
      items.forEach((item) => {
        subTotal += item.quantity * item.price;
      });
    });

    this.subtotal$.next(subTotal);
  }

  private quantity(data: Icart[]): number {
    let quantity = 0;
    data.forEach((item) => {
      quantity += item.quantity;
    });

    return quantity;
  }

  private updateCart(data: Icart[]): void {
    this.http
      .patch(this.baseUrl + '/users/' + localStorage.getItem('id'), {
        cart: data,
      })
      .subscribe();
  }

  public pushInCartList(data: Icart[]): void {
    this.arryOfCart = data;
    this.numOfProducts$.next(this.quantity(data));
    this.updateCart(this.arryOfCart);
  }

  public getCart(): void {
    this.http
      .get<Iregister>(this.baseUrl + '/users/' + localStorage.getItem('id'))
      .pipe(
        tap((data) => {
          this.cartList$.next(data.cart);
          this.numOfProducts$.next(this.quantity(data.cart));
        })
      )
      .subscribe();
  }

  public deleteProduct(products: Icart[]): void {
    this.cartList$.next(products);

    this.updateCart(products);

    this.numOfProducts$.next(this.quantity(products));
  }

  public resetCart(): void {
    this.arryOfCart = [];
    this.cartList$.next([]);
    this.numOfProducts$.next(0);
  }
}
