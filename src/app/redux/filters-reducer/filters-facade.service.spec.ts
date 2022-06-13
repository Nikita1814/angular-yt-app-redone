import { TestBed } from '@angular/core/testing';

import { FiltersFacadeService } from './filters-facade.service';

describe('FiltersFacadeService', () => {
  let service: FiltersFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
