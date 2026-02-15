import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtowishlistbuttonComponent } from './addtowishlistbutton.component';

describe('AddtowishlistbuttonComponent', () => {
  let component: AddtowishlistbuttonComponent;
  let fixture: ComponentFixture<AddtowishlistbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtowishlistbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtowishlistbuttonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
