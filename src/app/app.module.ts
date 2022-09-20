// FIXME: PREPARAR EL PROYECTO PARA LAZY LOADING
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para que funcione el [ngModel]
import { FormsModule } from '@angular/forms';

// FIXME: INSTALAR ANGULAR FIREBASE Y CONFIGURAR FIREBASE AUTH
import { AngularFireModule } from '@angular/fire/compat';
// Activará la autenticación
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

// FIXME: CREANDO NUESTROS PROPIOS SERVICIOS: HTTP CLIENT 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//  FIXME: QUE SON LOS COMPONENTES Y DECORADORES
// TODO: Componentes - Para que Angular reconozca que es un componente como parte de su aplicación
import { LayoutComponent } from './layout/layout.component';

// Modulos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// FIXME: CREANDO UN SHARED MODULE Y CORE MODULE
import { SharedModule } from './shared/shared.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

// Environments
import { environment } from '../environments/environment';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
