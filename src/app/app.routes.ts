import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'productos', component: Products },
  { path: 'producto/:id', component: ProductDetailComponent},
  { path: 'nosotros', component: About },
  { path: 'contacto', component: Contact },
  { path: '**', redirectTo: '' }
];