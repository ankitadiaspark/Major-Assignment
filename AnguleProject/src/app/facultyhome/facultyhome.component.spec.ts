import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyhomeComponent } from './facultyhome.component';

describe('FacultyhomeComponent', () => {
  let component: FacultyhomeComponent;
  let fixture: ComponentFixture<FacultyhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
