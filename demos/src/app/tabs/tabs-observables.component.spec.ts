import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsObservablesComponent } from './tabs-observables.component';

describe('TabsObservablesComponent', () => {
  let component: TabsObservablesComponent;
  let fixture: ComponentFixture<TabsObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
