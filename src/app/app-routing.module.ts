import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule),
  },
  {
    path: 'franchise',
    loadChildren: () => import('./features/franchise/franchise.module').then(m => m.FranchiseModule),
  },
  {
    path: 'contacts',
    loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
