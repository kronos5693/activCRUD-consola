
import { IProducto } from "./producto/producto.interface";
import { rating } from "./producto/producto.interface";
import { Producto } from "./producto/producto";
const r1: rating={
	rate:55,
	count:44
}

const p1: IProducto={
	
    title: "Zapatillas",
    price: "25555",
    description: "Las mejores",
    category: "Zapatos",
    image: "zaraza",
    rating: r1
}

const pp1 = new Producto(p1);
//pp1.saveProducLocal();
pp1.saveProducApi;
console.log(pp1.articulo.title)

