import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import firebase from 'firebase/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormularioComponent } from './formulario/formulario.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { AdministradorDeTesisComponent } from './administrador-de-tesis/administrador-de-tesis.component';
import { RegistradorDeTesisComponent } from './registrador-de-tesis/registrador-de-tesis.component';
import { DataService } from './shared/services/DataService.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PreguntaComponent,
    BuscadorComponent,
    AdministradorDeTesisComponent,
    RegistradorDeTesisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
