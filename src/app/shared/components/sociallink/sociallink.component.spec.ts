import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociallinkComponent } from './sociallink.component';

describe('SociallinkComponent', () => {
  let component: SociallinkComponent;
  let fixture: ComponentFixture<SociallinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SociallinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SociallinkComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
