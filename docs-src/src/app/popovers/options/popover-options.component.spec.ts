import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverOptionsComponent } from './popover-options.component';

describe('PopoverOptionsComponent', () => {
  let component: PopoverOptionsComponent;
  let fixture: ComponentFixture<PopoverOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
