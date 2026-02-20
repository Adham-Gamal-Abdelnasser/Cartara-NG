import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideorderComponent } from './sideorder.component';

describe('SideorderComponent', () => {
  let component: SideorderComponent;
  let fixture: ComponentFixture<SideorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideorderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
