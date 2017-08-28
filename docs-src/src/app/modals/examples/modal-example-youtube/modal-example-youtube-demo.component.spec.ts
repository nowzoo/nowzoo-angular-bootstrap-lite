import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleYoutubeDemoComponent } from './modal-example-youtube-demo.component';

describe('ModalExampleYoutubeDemoComponent', () => {
  let component: ModalExampleYoutubeDemoComponent;
  let fixture: ComponentFixture<ModalExampleYoutubeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleYoutubeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleYoutubeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
