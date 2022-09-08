import { IproductCard } from '../../../../shared/model/shared.model';
import { SharedService } from '../../../../shared/service/shared.service';
import { Router } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements OnInit {
  constructor(private service: SharedService, private router: Router) {}

  ngOnInit(): void {}

  @Input() isInWishlist = false;
  @Input() data: IproductCard = {
    id: 0,
    name: '',
    price: 0,
    smallDesc: '',
    description: [],
    imgs: [],
    alt: '',
    path: '',
    quantity: 0,
    brand: '',
  };

  @Output() addToCart = new EventEmitter<IproductCard>();
  @Output() addToWishlist = new EventEmitter<IproductCard>();

  public inputValue = 1;

  public addCart(data: IproductCard): void {
    if (this.service.isLoggedIn()) {
      data.quantity = this.inputValue;
      this.addToCart.emit(data);
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  public addWishlist(data: IproductCard): void {
    if (this.service.isLoggedIn()) {
      this.addToWishlist.emit(data);
      this.isInWishlist = true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
