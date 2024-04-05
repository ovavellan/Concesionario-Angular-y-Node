import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcesionarioService } from '../concesionario.service';

@Component({
  selector: 'app-auto-activo',
  templateUrl: './auto-activo.component.html',
  styleUrls: ['./auto-activo.component.css']
})
export class AutoActivoComponent implements OnInit{

  public autos:any;
  constructor(
    public autoServicio:ConcesionarioService,
    public router:Router
  ){}


  ngOnInit(): void {
    this.traerAllAutosActivos();
  }

  /*Funcion para traer los usuario */
  traerAllAutosActivos(){
    this.autoServicio.getAutosActivos().then(data=>this.autos=data)
  }

  getNumeroAutos(): number {
    return this.autos ? this.autos.length : 0;
  }

  redirectToMostrarAuto(id:number){
    this.router.navigate(['/actualizarAuto', {id:id}])
  }

}
