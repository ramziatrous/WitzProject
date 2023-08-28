import { TestBed } from '@angular/core/testing';

import { WitzService } from './witz.service';

describe('WitzService', () => {
  let service: WitzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WitzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
