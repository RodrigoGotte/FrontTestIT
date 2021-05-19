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
  public wacho:string|null=""

  constructor(
    
   /* public father:ProductoComponent,
    private _dataService:DataService,
    private  document: Document,
    */
 
    ) 
  { 
    
  }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('usuario'))
    var carro = (sessionStorage.getItem('carro'))
    //var subtotal = parseInt(sessionStorage.getItem('subtotal')),10)
    console.log("objeto obtenido="+ JSON.parse('carro'))
    //this.totalcom(subtotal,this.father.carro,this.father.usuario);

   
    
   
  }/*
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
  botoncompra()
  {
    if (this.father.usuario==null){
      return console.error("No hay usuario"); 
    }else{
      this.compra(this.father.usuario.idusuario,this.father.subtotal)
    }
  }
  compra(usuario:number, tot:number)
  {
    this._dataService.compra(usuario,tot).subscribe
    (response=>{
      console.log("tu compra se a hecho correctamerte")
      alert("Tu compra se a hecho correctamerte")
      this.document.location.href = 'localhost:4200/';
    },error =>{
      console.error(<any>error)
    });
    
  }*/
}
