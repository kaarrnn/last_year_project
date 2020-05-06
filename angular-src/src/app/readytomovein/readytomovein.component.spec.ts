import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadytomoveinComponent } from './readytomovein.component';

describe('ReadytomoveinComponent', () => {
  let component: ReadytomoveinComponent;
  let fixture: ComponentFixture<ReadytomoveinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadytomoveinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadytomoveinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
