import { TestBed } from '@angular/core/testing';

import { UserItemsFacadeService } from './user-items-facade.service';

describe('UserItemsFacadeService', () => {
  let service: UserItemsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserItemsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
