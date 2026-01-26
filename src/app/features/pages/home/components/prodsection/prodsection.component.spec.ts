import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdsectionComponent } from './prodsection.component';

describe('ProdsectionComponent', () => {
  let component: ProdsectionComponent;
  let fixture: ComponentFixture<ProdsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdsectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
