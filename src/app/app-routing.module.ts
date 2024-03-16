import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './general-module/Security/Guards/authorization.guard';

const routes: Routes = [
  {
    path: "client",
    loadChildren: () => import('./cliente-module/cliente-module.module').then(m => m.ClienteModuleModule)

  },
  {
    path: 'news',
    loadChildren: () =>import('./noticias-module/noticias-module.module').then((m) => m.NoticiasModuleModule),
    canActivate: [AuthorizationGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
