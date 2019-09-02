import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcateComponent } from './addcate.component';

describe('AddcateComponent', () => {
  let component: AddcateComponent;
  let fixture: ComponentFixture<AddcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
