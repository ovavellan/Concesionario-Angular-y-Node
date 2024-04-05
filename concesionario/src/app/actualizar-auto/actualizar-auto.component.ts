import { Component, OnInit } from '@angular/core';
import { ConcesionarioService } from '../concesionario.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-auto',
  templateUrl: './actualizar-auto.component.html',
  styleUrls: ['./actualizar-auto.component.css']
})
export class ActualizarAutoComponent implements OnInit {
  public auto: any;
  public id: number = 0;
  public marca: string = '';
  public modelo: string = '';
  public potencia_motor: string = '';
  public categoria: string = '';
  public precio_venta: string = '';
  public unidades_en_stock: string = '';
  public stock_minimo: string = '';
  public estado: string = '';
  public anio_fabricacion: string = '';

  constructor(
    public ConcesionarioService: ConcesionarioService,
    public ActivateRoute: ActivatedRoute,
    public router: Router) {
    this.id = this.ActivateRoute.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.obtenerAutoPorId();
  }

  async obtenerAutoPorId() {
    try {
      this.auto = await this.ConcesionarioService.getAutoById(this.id);
      this.marca = this.auto[0].marca;
      this.modelo = this.auto[0].modelo;
      this.potencia_motor = this.auto[0].potencia_motor;
      this.categoria = this.auto[0].categoria;
      this.precio_venta = this.auto[0].precio_venta;
      this.unidades_en_stock = this.auto[0].unidades_en_stock;
      this.stock_minimo = this.auto[0].stock_minimo;
      this.estado = this.auto[0].estado;
      this.anio_fabricacion = this.auto[0].anio_fabricacion;
    } catch (error) {
      console.log(error);
    }
  }

  async actualizarAuto() {
    try {
      const autoActualizado = {
        marca: this.marca,
        modelo: this.modelo,
        potencia_motor: this.potencia_motor,
        categoria: this.categoria,
        precio_venta: this.precio_venta,
        unidades_en_stock: this.unidades_en_stock,
        stock_minimo: this.stock_minimo,
        estado: this.estado,
        anio_fabricacion: this.anio_fabricacion
      };

      await this.ConcesionarioService.updateAuto(this.id, autoActualizado);

      console.log("Auto actualizado correctamente");

      // Redireccionar según el estado
      if (this.estado === 'activo') {
        this.router.navigate(['/autoActivos']);
      } else if (this.estado === 'dado de baja') {
        this.router.navigate(['/autoInactivo']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public isEditable(field: string): boolean {
    // Define qué campos son editables
    const editableFields = ['precio_venta', 'unidades_en_stock', 'stock_minimo', 'estado'];

    // Devuelve true si el campo es editable, de lo contrario, false
    return editableFields.includes(field);
  }

}
