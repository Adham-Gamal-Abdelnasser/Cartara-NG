import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderbrandsComponent } from './sliderbrands.component';

describe('SliderbrandsComponent', () => {
  let component: SliderbrandsComponent;
  let fixture: ComponentFixture<SliderbrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderbrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderbrandsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
