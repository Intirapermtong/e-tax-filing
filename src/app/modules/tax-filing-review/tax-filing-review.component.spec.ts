import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFilingReviewComponent } from './tax-filing-review.component';

describe('TaxFilingReviewComponent', () => {
  let component: TaxFilingReviewComponent;
  let fixture: ComponentFixture<TaxFilingReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxFilingReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxFilingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
