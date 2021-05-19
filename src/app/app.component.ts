import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Usuario } from './services/usuario.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {
  
  url: string;
  public sesion=false;
  public usuario!: Usuario;
  public nombre: string=""
	public contrasena: string=""
  title = 'Commerce FactorIT'; 
  
  constructor(
    private _dataService:DataService
  ){
    this.url="/api/"
     }
  
 


 
}
