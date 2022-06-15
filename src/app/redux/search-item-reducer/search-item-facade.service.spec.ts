import { TestBed } from '@angular/core/testing';

import { SearchItemFacadeService } from './search-item-facade.service';

describe('SearchItemFacadeService', () => {
  let service: SearchItemFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchItemFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
