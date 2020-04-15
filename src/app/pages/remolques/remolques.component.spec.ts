import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemolquesComponent } from './remolques.component';

describe('RemolquesComponent', () => {
  let component: RemolquesComponent;
  let fixture: ComponentFixture<RemolquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemolquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemolquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
