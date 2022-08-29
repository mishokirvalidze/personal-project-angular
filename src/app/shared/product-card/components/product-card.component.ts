import { IproductCard } from '../../model/shared.model';
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
    name: '',
    price: 0,
    description: '',
    img: '',
    alt: '',
  };

  ngOnInit(): void {}
}
