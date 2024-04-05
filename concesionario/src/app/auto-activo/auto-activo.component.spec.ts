import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoActivoComponent } from './auto-activo.component';

describe('AutoActivoComponent', () => {
  let component: AutoActivoComponent;
  let fixture: ComponentFixture<AutoActivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoActivoComponent]
    });
    fixture = TestBed.createComponent(AutoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
