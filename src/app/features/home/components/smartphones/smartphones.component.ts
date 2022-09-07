import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IproductCard } from 'src/app/shared/model/shared.model';
import { ProductService } from '../../../../shared/service/product.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartphonesComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.product(this.endpoint, this.card$);
  }

  private endpoint = '/smartphone?_page=1&_limit=3';

  private card$ = new BehaviorSubject<IproductCard[]>([]);

  public cards = this.card$.asObservable();
}
