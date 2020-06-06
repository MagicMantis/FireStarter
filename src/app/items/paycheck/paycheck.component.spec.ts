import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycheckComponent } from './paycheck.component';

describe('PaycheckComponent', () => {
  let component: PaycheckComponent;
  let fixture: ComponentFixture<PaycheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaycheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
