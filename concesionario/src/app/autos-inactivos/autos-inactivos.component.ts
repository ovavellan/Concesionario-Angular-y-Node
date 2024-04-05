import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcesionarioService } from '../concesionario.service';
@Component({
  selector: 'app-autos-inactivos',
  templateUrl: './autos-inactivos.component.html',
  styleUrls: ['./autos-inactivos.component.css']
})
export class AutosInactivosComponent implements OnInit {
  public autos: any;

  constructor(
    public autoServicio: ConcesionarioService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.traerAllAutosInactivos();
  }

  /*Funcion para traer los usuario */
  traerAllAutosInactivos() {
    this.autoServicio.getAutosInactivos().then(data => this.autos = data)
  }

  getNumeroAutos(): number {
    return this.autos ? this.autos.length : 0;
  }

  redirectToMostrarAuto(id:number){
    this.router.navigate(['/actualizarAuto', {id:id}])
  }
}
