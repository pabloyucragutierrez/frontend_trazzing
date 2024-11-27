import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioParaEmpresasComponent } from './servicio-para-empresas/servicio-para-empresas.component';
import { PortalDeEmpleoComponent } from './portal-de-empleo/portal-de-empleo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'servicio-para-empresas',
    component: ServicioParaEmpresasComponent,
  },
  {
    path: 'portal-de-empleo',
    component: PortalDeEmpleoComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
