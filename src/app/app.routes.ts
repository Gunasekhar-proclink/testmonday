import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [

    {
        path : "" , component: HomepageComponent
    }, 
{
    path: "products" , component: ProductsComponent
} , 
    {
        path : "cart" , component : CartComponent
    } , 

    {
        path : "orders" , component : OrdersComponent
    } , 

    {
        path : "**" , component : PagenotfoundComponent   
    } , 
];
