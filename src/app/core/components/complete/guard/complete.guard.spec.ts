import { TestBed } from '@angular/core/testing';

import { CompleteGuard } from './complete.guard';

describe('CheckoutGuard', () => {
  let guard: CompleteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompleteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
