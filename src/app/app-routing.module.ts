import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'det-heroe/:id',
    loadChildren: () => import('./pages/det-heroe/det-heroe.module').then( m => m.DetHeroePageModule)
  },
  {
    path: 'det-fotos/:id',
    loadChildren: () => import('./pages/det-fotos/det-fotos.module').then( m => m.DetFotosPageModule)
  },
  {
    path: 'det-heroe1/:idheroe',
    loadChildren: () => import('./pages/det-heroe1/det-heroe1.module').then( m => m.DetHeroe1PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
