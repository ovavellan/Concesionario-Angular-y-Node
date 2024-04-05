import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ConcesionarioService {
  url= "http://localhost:3000/";
  constructor(public http:HttpClient) { }

  //Consultar auto por id
  getAutoById(id: number){
    return new Promise(resolve => {
      this.http.get(this.url + 'auto/getById/' + id).subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }


  //Consultar los autos con estado activo
  getAutosActivos(){
    return new Promise(resolve => {
      this.http.get(this.url + 'autoActivo').subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  //Consultar los autos con estado dado de baja
  getAutosInactivos(){
    return new Promise(resolve => {
      this.http.get(this.url + 'autoInactivo').subscribe({
        next:(data) =>{
          resolve(data);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    })
  }

  //Actualizar un auto
  updateAuto(id: number, usuario: any){
    return new Promise(resolve => {
      this.http.put(this.url + 'actualizarAuto/' + id, usuario).subscribe({
        next: (data) => {
          resolve(data);
        },
        error(err){
          console.log(err)
        }
      })
    })
  }

}

