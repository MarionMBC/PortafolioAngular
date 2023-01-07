import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (public _servicio: InfoPaginaService ) {
//En las cosas que yo creo y en las inyecciones las pongo de Public

}
}
