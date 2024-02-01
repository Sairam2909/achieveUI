import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidedReviewsComponent } from './provided-reviews.component';

describe('ProvidedReviewsComponent', () => {
  let component: ProvidedReviewsComponent;
  let fixture: ComponentFixture<ProvidedReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidedReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvidedReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
