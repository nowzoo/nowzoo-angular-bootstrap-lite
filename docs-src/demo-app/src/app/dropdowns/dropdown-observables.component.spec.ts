import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownObservablesComponent } from './dropdown-observables.component';

describe('DropdownObservablesComponent', () => {
  let component: DropdownObservablesComponent;
  let fixture: ComponentFixture<DropdownObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
