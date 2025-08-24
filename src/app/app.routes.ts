import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout.component';
import { HomeComponent } from './pages/home.component';
import { ProductsComponent } from './pages/products.component';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];
