import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverMethodsComponent } from './popover-methods.component';

describe('PopoverMethodsComponent', () => {
  let component: PopoverMethodsComponent;
  let fixture: ComponentFixture<PopoverMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
