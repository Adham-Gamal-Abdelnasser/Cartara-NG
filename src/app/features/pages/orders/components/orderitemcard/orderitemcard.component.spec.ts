import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderitemcardComponent } from './orderitemcard.component';

describe('OrderitemcardComponent', () => {
  let component: OrderitemcardComponent;
  let fixture: ComponentFixture<OrderitemcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderitemcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderitemcardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
