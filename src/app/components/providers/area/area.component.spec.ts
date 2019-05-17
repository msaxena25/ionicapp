import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaComponent } from './area.component';

describe('AreaComponent', () => {
  let component: AreaComponent;
  let fixture: ComponentFixture<AreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
