import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestlayoutComponent } from './guestlayout.component';

describe('GuestlayoutComponent', () => {
  let component: GuestlayoutComponent;
  let fixture: ComponentFixture<GuestlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestlayoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
