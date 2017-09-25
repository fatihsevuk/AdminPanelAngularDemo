import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationChiefComponent } from './location-chief.component';

describe('LocationChiefComponent', () => {
  let component: LocationChiefComponent;
  let fixture: ComponentFixture<LocationChiefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationChiefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationChiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
