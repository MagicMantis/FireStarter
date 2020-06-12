import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSetComponent } from './item-set.component';

describe('ItemSetComponent', () => {
  let component: ItemSetComponent;
  let fixture: ComponentFixture<ItemSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
