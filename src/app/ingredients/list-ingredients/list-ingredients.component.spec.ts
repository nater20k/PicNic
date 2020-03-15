import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIngredientsComponent } from './list-ingredients.component';

describe('ListIngredientsComponent', () => {
  let component: ListIngredientsComponent;
  let fixture: ComponentFixture<ListIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
