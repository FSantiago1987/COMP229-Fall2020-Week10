import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './admin/auth/auth.guard';
import { BookStoreComponent } from './book-store/book-store.component';
import { CartDetailComponent } from './book-store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './book-store/checkout/checkout.component';
import { StoreFirstGuard } from './guards/storeFirst.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Our Home Page'}},
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},

  {path: 'about', component:AboutComponent, data: {title: 'About'}},
  {path: 'projects', component:ProjectsComponent, data: {title: 'Projects'}},
  {path: 'services', component:ServicesComponent, data: {title: 'Services'}},
  {path: 'contact', component:ContactComponent, data: {title: 'Contact'}},

  {path: 'book-list', component: BookStoreComponent, data: {title: 'Book Store'}, canActivate: [StoreFirstGuard]},
  {path: 'cart', component: CartDetailComponent, data: {title: 'Shopping Cart'}, canActivate: [StoreFirstGuard]},
  {path: 'checkout', component: CheckoutComponent, data: {title: 'Checkout'}, canActivate: [StoreFirstGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ StoreFirstGuard ]
})
export class AppRoutingModule { }
