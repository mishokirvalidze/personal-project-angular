import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IproductCard } from 'src/app/shared/model/shared.model';
import { ProductService } from '../../../../shared/service/product.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.product(this.endpoint, this.card$);
  }

  private endpoint = '/offers';

  private card$ = new BehaviorSubject<IproductCard[]>([]);

  public cards = this.card$.asObservable();
}
