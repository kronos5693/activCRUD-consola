import axios from "axios";
import { IProducto } from "./producto.interface";
import fs from 'fs';
const URL='https://fakestoreapi.com/products';


export const crearProducto=async(p:IProducto)=>{
    const response= await axios.post(`${URL}`,p);
    const data: IProducto= response.data
  
    return console.log(`Se creo el producto con id ${data.id}`);
};

export  const  getAllProductos = async (): Promise<IProducto[]> => {
	const { data } = await axios.get<IProducto[]>(`${URL}`);

	return data;

};

export const cargarProducto = (): IProducto[] => {
    try {
        const data = fs.readFileSync('productoBD.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log('No se pudo abrir el archivo alumnos.json');
        return [];
    }
};


export const guardarProducto= (p: IProducto) => {
    try {
        const allProductos = cargarProducto();
        allProductos.push(p);
        const data = JSON.stringify(allProductos, null, 2);
        fs.writeFileSync('productoBD.json', data);
        console.log('Se guardo correctamente!!!');
    } catch (error) {
        console.log('No se pudo guardar !!');
    }
};

