import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro2',
    loadChildren: () => import('./registro2/registro2.module').then( m => m.Registro2PageModule)
  },
  {
    path: 'registro3',
    loadChildren: () => import('./registro3/registro3.module').then( m => m.Registro3PageModule)
  },
  {
    path: 'registro4',
    loadChildren: () => import('./registro4/registro4.module').then( m => m.Registro4PageModule)
  },
  {
    path: 'registro5',
    loadChildren: () => import('./registro5/registro5.module').then( m => m.Registro5PageModule)
  },
  {
    path: 'home-main',
    loadChildren: () => import('./home-main/home-main.module').then( m => m.HomeMainPageModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./contactanos/contactanos.module').then( m => m.ContactanosPageModule)
  },  {
    path: 'negocios',
    loadChildren: () => import('./negocios/negocios.module').then( m => m.NegociosPageModule)
  },
  {
    path: 'home-user',
    loadChildren: () => import('./home-user/home-user.module').then( m => m.HomeUserPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
