import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Icarousel } from './model/home.model';
import { SharedService } from '../../shared/service/shared.service';
import { CartService } from '../../shared/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(
    private service: SharedService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.service.isLoggedIn();

    if (this.service.isLoggedIn()) {
      this.cartService.getCart();
    }
  }

  carouselImages: Icarousel[] = [
    {
      imgSrc: '../../../../assets/images/banner/banner-1.jpg',
      alt: 'banner-1',
    },
    {
      imgSrc: '../../../../assets/images/banner/banner-2.jpg',
      alt: 'banner-2',
    },
    {
      imgSrc: '../../../../assets/images/banner/banner-3.jpg',
      alt: 'banner-3',
    },
  ];

  brandsImages: Icarousel[] = [
    {
      imgSrc: '../../../../assets/images/brand/amd-logo.png',
      alt: 'amd',
    },
    {
      imgSrc: '../../../assets/images/brand/asrock-logo.png',
      alt: 'asrock',
    },
    {
      imgSrc: '../../../assets/images/brand/asus-logo.png',
      alt: 'asus',
    },
    {
      imgSrc: '../../../assets/images/brand/corsair-logo.png',
      alt: 'corsair',
    },
    {
      imgSrc: '../../../assets/images/brand/genius-logo.png',
      alt: 'genius',
    },
    {
      imgSrc: '../../../assets/images/brand/gigabyte-logo.png',
      alt: 'gigabyte',
    },
    {
      imgSrc: '../../../assets/images/brand//hp-logo.png',
      alt: 'hp',
    },
    {
      imgSrc: '../../../assets/images/brand/intel-logo.png',
      alt: 'intel',
    },
    {
      imgSrc: '../../../assets/images/brand/kingston-logo.png',
      alt: 'kingston',
    },
    {
      imgSrc: '../../../assets/images/brand/lenovo-logo.png',
      alt: 'lenovo',
    },
    {
      imgSrc: '../../../assets/images/brand/logitech-logo.png',
      alt: 'logitech',
    },
    {
      imgSrc: '../../../assets/images/brand/msi-logo.png',
      alt: 'msi',
    },
    {
      imgSrc: '../../../assets/images/brand/nvidia-logo.png',
      alt: 'nvidia',
    },
    {
      imgSrc: '../../../assets/images/brand/philips-logo.png',
      alt: 'philips',
    },
    {
      imgSrc: '../../../assets/images/brand/redragon-logo.png',
      alt: 'redragon',
    },
    {
      imgSrc: '../../../assets/images/brand/samsung-logo.png',
      alt: 'samsung',
    },
  ];
}
