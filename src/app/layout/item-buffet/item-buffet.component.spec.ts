import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBuffetComponent } from './item-buffet.component';

describe('ItemBuffetComponent', () => {
  let component: ItemBuffetComponent;
  let fixture: ComponentFixture<ItemBuffetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBuffetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBuffetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
