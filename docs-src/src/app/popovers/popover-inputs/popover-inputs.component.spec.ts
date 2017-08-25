import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverInputsComponent } from './popover-inputs.component';

describe('PopoverInputsComponent', () => {
  let component: PopoverInputsComponent;
  let fixture: ComponentFixture<PopoverInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
