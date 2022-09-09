import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  title = 'Megabyte';

  private subscription = new Subscription();

  ngOnInit(): void {
    this.animationFn();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loading$ = new BehaviorSubject<boolean>(false);
  public loading = this.loading$.asObservable();

  private animationFn(): void {
    this.subscription = this.router.events.subscribe((data) => {
      if (data instanceof NavigationStart) {
        this.loading$.next(true);
      }

      if (data instanceof NavigationEnd) {
        setTimeout(() => {
          this.loading$.next(false);
        }, 1000);
      }
    });
  }
}
