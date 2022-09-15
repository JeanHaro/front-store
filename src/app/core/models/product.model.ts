// FIXME: USO DE ngFor PARA RECORRER OBJETOS
// TODO: Es una representación de lo que tendrá el producto
// TODO: export - es para exportar la interface
export interface Product {
    uid: string;
    image: string;
    title: string;
    price: number;
    description: string;
    order?: number;
}