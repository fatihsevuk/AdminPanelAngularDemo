import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelandarComponent } from './celandar.component';

describe('CelandarComponent', () => {
  let component: CelandarComponent;
  let fixture: ComponentFixture<CelandarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelandarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
