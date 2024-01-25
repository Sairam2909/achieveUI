import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfReviewFormComponent } from './self-review-form.component';

describe('SelfReviewFormComponent', () => {
  let component: SelfReviewFormComponent;
  let fixture: ComponentFixture<SelfReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfReviewFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
