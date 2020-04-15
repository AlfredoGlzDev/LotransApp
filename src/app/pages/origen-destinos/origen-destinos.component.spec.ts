import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenDestinosComponent } from './origen-destinos.component';

describe('OrigenDestinosComponent', () => {
  let component: OrigenDestinosComponent;
  let fixture: ComponentFixture<OrigenDestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigenDestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigenDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
