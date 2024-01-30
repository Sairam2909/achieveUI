import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceReviewCardComponent } from './performance-review-card.component';

describe('PerformanceReviewCardComponent', () => {
  let component: PerformanceReviewCardComponent;
  let fixture: ComponentFixture<PerformanceReviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceReviewCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
