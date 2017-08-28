import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleGoAwayDemoComponent } from './modal-example-go-away-demo.component';

describe('ModalExampleGoAwayDemoComponent', () => {
  let component: ModalExampleGoAwayDemoComponent;
  let fixture: ComponentFixture<ModalExampleGoAwayDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleGoAwayDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleGoAwayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
