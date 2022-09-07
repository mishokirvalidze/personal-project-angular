import { IproductCard } from '../../../model/shared.model';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  constructor() {}

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

  ngOnInit(): void {}
}
