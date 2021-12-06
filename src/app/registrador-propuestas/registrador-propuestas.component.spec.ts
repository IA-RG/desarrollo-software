import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradorPropuestasComponent } from './registrador-propuestas.component';

describe('RegistradorPropuestasComponent', () => {
  let component: RegistradorPropuestasComponent;
  let fixture: ComponentFixture<RegistradorPropuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistradorPropuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistradorPropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
