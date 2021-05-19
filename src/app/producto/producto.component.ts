import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../services/producto.model';
import { DataService } from '../services/data.service';
import { Usuario } from '../services/usuario.model';
import { logging } from 'selenium-webdriver';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers:[DataService]
})
export class ProductoComponent implements OnInit {
  
  @Input()
  public sesion=false;
  
  public usuario!: Usuario;
  public nombre: string=""
  public contrasena: string=""
  public prods: Producto[] | undefined ;
  public carro:Producto[]=[]
  public url:string;
  public subtotal: number=0;
  
  
  
  constructor(
    
    private _dataService:DataService
    
    ){
      this.url="/api/"
      
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
          sessionStorage.setItem('carro',JSON.stringify(this.carro))
          sessionStorage.setItem('subtotal',JSON.stringify(this.subtotal))

    },
    error =>{
          console.log(<any>error);
    });   
    }
    onLogin(nombre:String, contrasena:String)
    {
        this._dataService.getLogin(nombre, contrasena).subscribe(
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
     
            



