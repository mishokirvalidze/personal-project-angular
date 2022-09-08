import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IproductCard } from 'src/app/shared/model/shared.model';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.product(this.endpoint);
    this.card = this.service.card;
    this.error = this.service.productError;
  }

  private endpoint = '/desktop';

  public card = new Observable<IproductCard[]>();
  public error = new Observable<string>();
}
