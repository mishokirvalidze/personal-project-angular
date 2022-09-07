import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IproductCard } from 'src/app/shared/model/shared.model';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartphoneComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.product(this.endpoint);
    this.card = this.service.card;
    this.error = this.service.productError;
  }

  private endpoint = '/smartphone';

  public card = new Observable<IproductCard[]>();
  public error = new Observable<string>();
}
