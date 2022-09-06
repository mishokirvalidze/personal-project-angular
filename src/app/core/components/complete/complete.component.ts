import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/service/cart.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompleteComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.deleteProduct([]);
  }
}
