import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarritoComponent } from './carrito/carrito.component';
import { ProductoComponent } from './producto/producto.component';
import { SesionUsuComponent } from './sesion-usu/sesion-usu.component';

const routes: Routes = [
	{path:'',component:ProductoComponent},
	{path:'Productos',component:ProductoComponent},
	{path:'Carrito',component:CarritoComponent},
	{path:'login',component:SesionUsuComponent},
	{path:'logout',component:SesionUsuComponent}

];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(routes);



