import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info:InfoPagina={}
  cargada:boolean=false

  constructor(private http: HttpClient) {
    //Leer archivo
    this.http.get('assets/data/data-page.json')
    .subscribe((res:InfoPagina) => {
      this.cargada=true
      this.info = res
      console.log(res)
    })
  }
}