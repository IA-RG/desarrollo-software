import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentadorDeHistorialDeProfesorComponent } from './presentador-de-historial-de-profesor.component';

describe('PresentadorDeHistorialDeProfesorComponent', () => {
  let component: PresentadorDeHistorialDeProfesorComponent;
  let fixture: ComponentFixture<PresentadorDeHistorialDeProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentadorDeHistorialDeProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentadorDeHistorialDeProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
