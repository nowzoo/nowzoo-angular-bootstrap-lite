import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleGoAwayRouteComponent } from './modal-example-go-away-route.component';

describe('ModalExampleGoAwayRouteComponent', () => {
  let component: ModalExampleGoAwayRouteComponent;
  let fixture: ComponentFixture<ModalExampleGoAwayRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleGoAwayRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleGoAwayRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
