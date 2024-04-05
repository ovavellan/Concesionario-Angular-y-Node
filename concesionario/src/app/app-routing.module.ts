import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoActivoComponent } from "./auto-activo/auto-activo.component";
import {AutosInactivosComponent} from "./autos-inactivos/autos-inactivos.component"
import {ActualizarAutoComponent} from "./actualizar-auto/actualizar-auto.component";


const routes: Routes = [
  {path: "autoActivos", component: AutoActivoComponent,
    pathMatch:"full"},
  {path: "autoInactivo", component: AutosInactivosComponent,
    pathMatch:"full"},
  {path: "actualizarAuto", component: ActualizarAutoComponent,
    pathMatch:"full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
