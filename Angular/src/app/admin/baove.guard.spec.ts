import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { baoveGuard } from './baove.guard';

describe('baoveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => baoveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
