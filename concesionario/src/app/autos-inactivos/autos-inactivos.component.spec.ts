import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosInactivosComponent } from './autos-inactivos.component';

describe('AutosInactivosComponent', () => {
  let component: AutosInactivosComponent;
  let fixture: ComponentFixture<AutosInactivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutosInactivosComponent]
    });
    fixture = TestBed.createComponent(AutosInactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
