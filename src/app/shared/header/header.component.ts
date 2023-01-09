import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (public _servicio: InfoPaginaService, private router: Router ) {
//En las cosas que yo creo y en las inyecciones las pongo de Public

}


searchProduct(txt:string){
if (txt.length <1) {
  return;
}
this.router.navigate(['/search', txt]);
}
}

//Notas:
/*Cuando yo agregué #txt en el HTML del componente,
me sirve para tener una referencia local de lo que escriba
dentro del input*/
