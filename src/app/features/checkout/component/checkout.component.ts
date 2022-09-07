import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../../shared/service/cart.service';
import { Router } from '@angular/router';
import { Helper } from 'src/app/core/components/complete/helper/helper';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.cartService.getCart();
      this.cartService.count();
    }, 400);
    this.cartNum = this.cartService.numOfProducts;
    this.subtotal = this.cartService.subtotal;
  }

  ngOnDestroy(): void {
    Helper.isNextStep = false;
  }

  public subtotal = new Observable<number>();
  public cartNum = new Observable<number>();

  submit() {
    let form = document.querySelector('form') as HTMLFormElement;
    if (form.checkValidity()) this.router.navigateByUrl('/complete');
    this.nextStep();
  }

  private nextStep(): void {
    Helper.isNextStep = true;
  }
}
