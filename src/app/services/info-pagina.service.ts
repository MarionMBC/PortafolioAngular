import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info:InfoPagina={}
  cargada:boolean=false
  equipo:any[]= []

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }




private loadInfo(){
    //Leer archivo
    this.http.get('assets/data/data-page.json')
    .subscribe((res:InfoPagina) => {
      this.cargada=true
      this.info = res
      console.log(res)
    })
}
private loadTeam(){
  this.http.get('https://portfolio-mbc-default-rtdb.firebaseio.com/equipo.json')
  .subscribe((res:any)=>{
    this.equipo = res
    console.log(res)
  })
}

}
