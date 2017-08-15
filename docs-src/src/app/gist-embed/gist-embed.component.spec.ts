import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistEmbedComponent } from './gist-embed.component';

describe('GistEmbedComponent', () => {
  let component: GistEmbedComponent;
  let fixture: ComponentFixture<GistEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
