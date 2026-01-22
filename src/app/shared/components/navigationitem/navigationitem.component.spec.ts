import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationitemComponent } from './navigationitem.component';

describe('NavigationitemComponent', () => {
  let component: NavigationitemComponent;
  let fixture: ComponentFixture<NavigationitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationitemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
