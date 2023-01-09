import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

constructor (private route: ActivatedRoute, public _productosService:ProductosService) {
  this.route.params.subscribe(params=>{
    console.log(params['txt']);
    this._productosService.searchProduct(params['txt']);
  })
}

}
