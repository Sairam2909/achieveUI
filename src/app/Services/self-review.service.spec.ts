import { TestBed } from '@angular/core/testing';

import { SelfReviewService } from './self-review.service';

describe('SelfReviewService', () => {
  let service: SelfReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
