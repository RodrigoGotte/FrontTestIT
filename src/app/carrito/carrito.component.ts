import { Component, OnInit, Input } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { DataService } from '../services/data.service';
import { Producto } from '../services/producto.model';
import { Usuario } from '../services/usuario.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers:[DataService]
})
export class CarritoComponent implements OnInit {

  constructor(
    public father:ProductoComponent,
    

  ) 
  { 
    
  }

  ngOnInit(): void {
    
    this.totalcom(this.father.subtotal,this.father.carro,this.father.usuario);

    console.log(this.father.subtotal)
    var total=this.father.subtotal

  }
  totalcom(sub:number,carro:Producto[], usuario:Usuario)
  {
    if (usuario==null){
      return console.error("No hay usuario"); 
    }else{
    sub=sub;
    if (carro.length >= 4){
      sub=(sub*0.25)-sub;
    }
    if (carro.length >= 10)
    {
      if (usuario.tipocarrito == 2)
      { 
        sub=sub-100;
      }
      if (usuario.tipocarrito == 1)
      { 
        sub=sub-500;
      }
     if (usuario.tipocarrito == 3)
      { 
        sub=sub-300;
      }
    return sub;
    }
  }
      
  }
}
