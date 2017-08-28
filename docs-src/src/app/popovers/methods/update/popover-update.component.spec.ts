import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverUpdateComponent } from './popover-update.component';

describe('PopoverUpdateComponent', () => {
  let component: PopoverUpdateComponent;
  let fixture: ComponentFixture<PopoverUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
