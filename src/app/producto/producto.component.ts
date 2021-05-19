import { Component, OnInit } from '@angular/core';
import { Producto } from '../services/producto.model';
import { DataService } from '../services/data.service';
import { Usuario } from '../services/usuario.model';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers:[DataService]
})
export class ProductoComponent implements OnInit {

  public prods: Producto[] | undefined ;
  public carro:Producto[]=[]
  public url:string;
  public subtotal: number=0;
  public sesion=false;
  public usuario!: Usuario;
  
  
  constructor(
    private _dataService:DataService
    ){
      this.url="/api/";
    }

    ngOnInit(): void
    {
      console.log("entreaca")
      this._dataService.getProductos().subscribe(
        response => {
            this.prods=response;        
      },
      error =>{
        console.log(<any>error);
      });
    }
   
    agregarCarrito(id:number,precio:number)
   {     
    this._dataService.getProd(id).subscribe(
    response => {
          this.carro.push(response);    
          this.subtotal=this.subtotal+precio
    },
    error =>{
          console.log(<any>error);
    });   
    }
    
    onLogin(nombre:String, contraseña:String)
    {
        this._dataService.getLogin(nombre, contraseña).subscribe(
        response => {
             this.usuario=response;
             console.log(this.usuario);
             this.sesion=true;     
             console.log(this.sesion);
              
        },
        error =>{
              console.log(<any>error);
        });    
      }
     }
            



