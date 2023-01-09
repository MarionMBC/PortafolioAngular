import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoProduct } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos:infoProduct[] = []
  cargando = true
  productosFiltrado:infoProduct[]=[];

  constructor(private http:HttpClient) {
    this.loadProducts()
  }

private loadProducts(){
  return new Promise<void>((resolve, reject)=>{
    this.http.get('https://portfolio-mbc-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((res:any)=>{
      this.productos = res;
      this.cargando = false;
      resolve();
    });
  });

}


getProduct (id:infoProduct['cod']){
  return this.http.get(`https://portfolio-mbc-default-rtdb.firebaseio.com/productos/${id}.json`)
}


searchProduct(txt:string){
  if (this.productos.length==0) {
    //cargarProductos
    this.loadProducts().then(()=>{
      //ejecutarDespuésDeTenerLosProductos
      //aplicar el filtro
      this.filtrarProductos(txt)
    });
  } else {
    this.filtrarProductos(txt)
  }
}


private filtrarProductos(txt:string){
  txt = txt.toLowerCase()
  this.productosFiltrado = []
  console.log(this.productos);
  this.productos.forEach(prod=>{
    const title = prod.titulo.toLowerCase()
    if (prod.categoria.indexOf(txt) >= 0 || title.indexOf(txt)>=0){
      this.productosFiltrado.push(prod)
    }
  })
}


}
