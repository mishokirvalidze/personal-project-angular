import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Banner2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
