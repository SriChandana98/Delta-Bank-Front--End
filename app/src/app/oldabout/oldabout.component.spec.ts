import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldaboutComponent } from './oldabout.component';

describe('OldaboutComponent', () => {
  let component: OldaboutComponent;
  let fixture: ComponentFixture<OldaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
