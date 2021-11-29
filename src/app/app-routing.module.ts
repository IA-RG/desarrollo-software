import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { PresentadorDeHistorialDeProfesorComponent } from './presentador-de-historial-de-profesor/presentador-de-historial-de-profesor.component';
import { RegistradorDeTesisComponent } from './registrador-de-tesis/registrador-de-tesis.component';

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
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
