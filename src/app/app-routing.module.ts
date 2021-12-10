import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorDeTesisComponent } from './administrador-de-tesis/administrador-de-tesis.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { PresentadorDeHistorialDeProfesorComponent } from './presentador-de-historial-de-profesor/presentador-de-historial-de-profesor.component';
import { RegistradorDeTesisComponent } from './registrador-de-tesis/registrador-de-tesis.component';
import { RegistradorPropuestasComponent } from './registrador-propuestas/registrador-propuestas.component';

const routes: Routes = [{
  path: 'busqueda',
  component: BuscadorComponent,
  },
  {
    path: 'registro-tesis',
    component: RegistradorDeTesisComponent,
  },
  {
    path:'profesor/historial',
    component: PresentadorDeHistorialDeProfesorComponent
    
  },
  {
    path: 'registro-protocolo',
    component: RegistradorPropuestasComponent,
  },
  {
    path: 'administrador-tesis',
    component: AdministradorDeTesisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
