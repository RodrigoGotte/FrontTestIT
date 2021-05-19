import { Component, OnInit, Input, DoCheck } from '@angular/core';
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

export class CarritoComponent implements OnInit,DoCheck {

 @Input()
 carrohijo:Producto[]=[]
 
 @Input()
 subtotal:number=0

 @Input()
  usuario!: Usuario;

@Input()
sesion:boolean=false;
acu4:number=0;
acu10:number=0;
  
  
constructor(
    private _dataService:DataService,  
    ) 
  { 
    
  }
    ngOnInit(): void 
    {
     
    }
  
  ngDoCheck()
  {  
    
    if(this.carrohijo.length == 4 || this.carrohijo.length ==10)
    {
      if(this.carrohijo.length == 4 && this.acu4 == 0)
      {
        this.subtotal=this.subtotal-(this.subtotal*0.25)
        this.acu4=1;
      }
      if (this.carrohijo.length >= 10 && this.acu10==0)
      {        
        if (this.usuario.tipocarrito == 1)
        { 
          this.subtotal=this.subtotal-500;
          this.acu10=1;
        }
        if (this.usuario.tipocarrito == 2)
        { 
          this.subtotal=this.subtotal-100;
          this.acu10=1;
        }
        if (this.usuario.tipocarrito == 3)
        { 
          this.subtotal=this.subtotal-300;
          this.acu10=1;
        }
      }    
   }
  }
  
  
  botoncompra()
  {
    if (this.usuario==null){
      return console.error("No hay usuario"); 
    }else{
      this.compra(this.usuario.idusuario,this.subtotal)
    }
  }
  compra(usuario:number, tot:number)
  {
    this._dataService.compra(usuario,tot).subscribe
    (response=>{
      console.log("tu compra se a hecho correctamerte")
      alert("Tu compra se a hecho correctamerte")
      this.carrohijo =[];
      this.subtotal=0
    },error =>{
      console.error(<any>error)
    });
    
  }

}
