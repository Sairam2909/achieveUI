import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherReviewFormComponent } from './other-review-form.component';

describe('OtherReviewFormComponent', () => {
  let component: OtherReviewFormComponent;
  let fixture: ComponentFixture<OtherReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherReviewFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
