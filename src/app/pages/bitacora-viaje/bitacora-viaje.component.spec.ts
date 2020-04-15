import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraViajeComponent } from './bitacora-viaje.component';

describe('BitacoraViajeComponent', () => {
  let component: BitacoraViajeComponent;
  let fixture: ComponentFixture<BitacoraViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacoraViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoraViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
