import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from './producto.model';
import { Observable } from 'rxjs';


	

@Injectable()
export class DataService{
	public url:string;
    
    constructor(
        private _http:HttpClient
    ){
        this.url="/api/";
    }
    //productos DATA
    getProductos(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url, {headers: headers});
	}
    getProd(id:number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+"prod/"+id, {headers: headers});
    }

    //Usuarios DATA
    getLogin(nombre:String, contraseña:String):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+"usu/"+nombre+"/"+contraseña, {headers: headers});
    }
    

}