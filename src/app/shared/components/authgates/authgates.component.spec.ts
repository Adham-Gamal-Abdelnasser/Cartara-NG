import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthgatesComponent } from './authgates.component';

describe('AuthgatesComponent', () => {
  let component: AuthgatesComponent;
  let fixture: ComponentFixture<AuthgatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthgatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthgatesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
