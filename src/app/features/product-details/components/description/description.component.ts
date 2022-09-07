import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DescData } from '../../../../shared/model/shared.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() description: DescData[] = [];
}
