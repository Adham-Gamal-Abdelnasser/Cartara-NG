import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidercategoriesComponent } from './slidercategories.component';

describe('SlidercategoriesComponent', () => {
  let component: SlidercategoriesComponent;
  let fixture: ComponentFixture<SlidercategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidercategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidercategoriesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
