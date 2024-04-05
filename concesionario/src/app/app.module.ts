import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutoActivoComponent } from './auto-activo/auto-activo.component';
import { AutosInactivosComponent } from './autos-inactivos/autos-inactivos.component';
import { ActualizarAutoComponent } from './actualizar-auto/actualizar-auto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AutoActivoComponent,
    AutosInactivosComponent,
    ActualizarAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
