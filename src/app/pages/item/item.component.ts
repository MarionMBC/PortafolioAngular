import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductDescription } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  product:ProductDescription = {}
  constructor (private route: ActivatedRoute, private _product:ProductosService){
    this.route.params.subscribe(param=>{
      _product.getProduct(param['id'])
        .subscribe((res:ProductDescription)=>{
          this.product = res
          console.log(res);
        })
    })
  }

}
