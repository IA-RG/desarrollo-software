import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDeTesisComponent } from './administrador-de-tesis.component';

describe('AdministradorDeTesisComponent', () => {
  let component: AdministradorDeTesisComponent;
  let fixture: ComponentFixture<AdministradorDeTesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorDeTesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorDeTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
