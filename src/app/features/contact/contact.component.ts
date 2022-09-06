import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../../shared/service/shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  constructor(private route: Router, private service: SharedService) {}

  ngOnInit(): void {
    this.service.isLoggedIn();
    this.isLoggedIn = this.service.isSignUp;
  }

  public isLoggedIn = new Observable<boolean>();

  public submit(): void {
    let form = document.querySelector('form') as HTMLFormElement;
    if (form.checkValidity()) this.route.navigateByUrl('');
  }
}
