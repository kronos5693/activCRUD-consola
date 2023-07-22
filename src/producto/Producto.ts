import { IProducto } from "./producto.interface";
import {
  cargarProducto,
  crearProducto,
  getAllProductos,
} from "./producto.service";
import { guardarProducto } from "./producto.service";

export class Producto {
  articulo: IProducto;

  constructor(produc: IProducto) {
    this.articulo = produc;
  }


  public saveProducLocal() {
    guardarProducto(this.articulo);
  }
  public saveProducApi() {
    crearProducto(this.articulo);
  }

}