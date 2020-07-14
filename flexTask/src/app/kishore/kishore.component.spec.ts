import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KishoreComponent } from './kishore.component';

describe('KishoreComponent', () => {
  let component: KishoreComponent;
  let fixture: ComponentFixture<KishoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KishoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KishoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
