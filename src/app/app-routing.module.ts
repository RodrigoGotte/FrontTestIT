import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarritoComponent } from './carrito/carrito.component';
import { ProductoComponent } from './producto/producto.component';


const routes: Routes = [
	{path:'',component:ProductoComponent},
	{path:'productos',component:ProductoComponent},
	{path:'carrito',component:CarritoComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(routes);



