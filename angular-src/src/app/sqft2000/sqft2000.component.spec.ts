import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sqft2000Component } from './sqft2000.component';

describe('Sqft2000Component', () => {
  let component: Sqft2000Component;
  let fixture: ComponentFixture<Sqft2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sqft2000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sqft2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
