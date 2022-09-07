import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AuthGuard } from './features/guard/auth.guard';
import { CompleteGuard } from './core/components/complete/guard/complete.guard';
import { CompleteComponent } from './core/components/complete/complete.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'signup',
    loadChildren: () =>
      import('./auth/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.module').then((m) => m.CartModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },

  {
    path: 'details',
    loadChildren: () =>
      import('./features/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shared/modules/shop/shop.module').then((m) => m.ShopModule),
  },

  {
    path: 'desktop',
    loadChildren: () =>
      import('./features/desktop/desktop.module').then((m) => m.DesktopModule),
  },
  {
    path: 'notebook',
    loadChildren: () =>
      import('./features/notebook/notebooks.module').then(
        (m) => m.NotebookModule
      ),
  },
  {
    path: 'smartphone',
    loadChildren: () =>
      import('./features/smartphone/smartphone.module').then(
        (m) => m.SmartphoneModule
      ),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./features/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      ),
  },
  {
    path: 'faqs',
    loadChildren: () =>
      import('./features/faqs/faqs.module').then((m) => m.FaqsModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'complete',
    component: CompleteComponent,
    title: 'Megabyte - Complete',
    canActivate: [CompleteGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Megabyte - Error 404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
