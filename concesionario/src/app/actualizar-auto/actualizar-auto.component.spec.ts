import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAutoComponent } from './actualizar-auto.component';

describe('ActualizarAutoComponent', () => {
  let component: ActualizarAutoComponent;
  let fixture: ComponentFixture<ActualizarAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarAutoComponent]
    });
    fixture = TestBed.createComponent(ActualizarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
