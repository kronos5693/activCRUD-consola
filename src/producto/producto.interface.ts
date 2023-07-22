export interface IProducto {
    id?: number;
    title: String;
    price: String;
    description: String;
    category: string;
    image: String;
    rating: rating;
  }
  
  export interface rating {
    rate: number;
    count: number;
  }