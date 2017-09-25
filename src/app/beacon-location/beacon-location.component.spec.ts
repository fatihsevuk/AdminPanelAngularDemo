import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaconLocationComponent } from './beacon-location.component';

describe('BeaconLocationComponent', () => {
  let component: BeaconLocationComponent;
  let fixture: ComponentFixture<BeaconLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaconLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaconLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
