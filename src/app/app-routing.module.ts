import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'crear-usuario',
    loadChildren: () => import('./pages/login/crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },
  {
    path: 'rest-contrasena',
    loadChildren: () => import('./pages/rest-contrasena/rest-contrasena.module').then( m => m.RestContrasenaPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./pages/asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
  },
  {
    path: 'login-docentes',
    loadChildren: () => import('./pages/login-docentes/login-docentes.module').then( m => m.LoginDocentesPageModule)
  },
  {
    path: 'homedocente',
    loadChildren: () => import('./pages/homedocente/homedocente.module').then( m => m.HomedocentePageModule)
  },
  {
    path: 'asis-docente',
    loadChildren: () => import('./pages/asis-docente/asis-docente.module').then( m => m.AsisDocentePageModule)
  },
  {
    path: 'gen-qr',
    loadChildren: () => import('./pages/gen-qr/gen-qr.module').then( m => m.GenQRPageModule)
  },
  {
    path: 'api-digimon',
    loadChildren: () => import('./pages/api-digimon/api-digimon.module').then( m => m.APIDigimonPageModule)
  },
  {
    path: 'detallecard/:id',
    loadChildren: () => import('./pages/detallecard/detallecard.module').then( m => m.DetallecardPageModule)
  },
  {
    path: 'apihome',
    loadChildren: () => import('./pages/api/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'apiadd',
    loadChildren: () => import('./pages/api/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'apidelete/:id',
    loadChildren: () => import('./pages/api/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'apidetail/:id',
    loadChildren: () => import('./pages/api/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'apiupdate/:id',
    loadChildren: () => import('./pages/api/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'apilist',
    loadChildren: () => import('./pages/api/list/list.module').then( m => m.ListPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
