import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoProduct } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos:infoProduct[] = []
  cargando = true

  constructor(private http:HttpClient) {
    this.loadProducts()
  }

private loadProducts(){
    this.http.get('https://portfolio-mbc-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((res:any)=>{
      this.productos = res;
      this.cargando = false;
      console.log('Respuesta');
      console.log(this.productos);
    })
}


getProduct (id:infoProduct['cod']){
  return this.http.get(`https://portfolio-mbc-default-rtdb.firebaseio.com/productos/${id}.json`)
}


}
