import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverApiComponent } from './popover-api.component';

describe('PopoverApiComponent', () => {
  let component: PopoverApiComponent;
  let fixture: ComponentFixture<PopoverApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
