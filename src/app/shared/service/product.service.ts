import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  map,
  Observable,
  Observer,
  tap,
} from 'rxjs';
import { IproductCard } from 'src/app/shared/model/shared.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';

  private card$ = new BehaviorSubject<IproductCard[]>([]);

  public card = this.card$.asObservable();

  private error$ = new BehaviorSubject<string>('');
  public productError = this.error$.asObservable();

  public product(
    endpoint: string,
    card$: Observer<IproductCard[]> = this.card$
  ): void {
    this.getProducts(endpoint)
      .pipe(
        tap((data) => {
          card$.next(
            data.map((item) => {
              return {
                id: item.id,
                name: item.name,
                imgs: item.imgs.map((img) => {
                  return '../../../../../assets/images' + img;
                }),
                price: item.price,
                oldPrice: item.oldPrice,
                alt: item.alt,
                smallDesc: item.smallDesc,
                description: item.description,
                path: item.path,
                offer: item.offer,
                quantity: item.quantity,
                brand: item.brand,
              };
            })
          );
        }),
        catchError((err: HttpErrorResponse) => {
          this.error$.next(err.error);
          return EMPTY;
        })
      )
      .subscribe();
  }

  public getProducts(endpoint: string): Observable<IproductCard[]> {
    return this.http.get<IproductCard[]>(this.baseUrl + endpoint).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
