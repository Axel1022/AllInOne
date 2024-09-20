import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },

  {
    path: 'inicio',
    loadChildren: () =>
      import('./inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'sumadora',
    loadChildren: () =>
      import('./sumadora/sumadora.module').then((m) => m.SumadoraPageModule),
  },
  {
    path: 'traductor',
    loadChildren: () =>
      import('./traductor/traductor.module').then((m) => m.TraductorPageModule),
  },
  {
    path: 'tabla',
    loadChildren: () =>
      import('./tabla/tabla.module').then((m) => m.TablaPageModule),
  },
  {
    path: 'video',
    loadChildren: () =>
      import('./video/video.module').then((m) => m.VideoPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
