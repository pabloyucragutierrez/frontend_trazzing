import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioParaEmpresasComponent } from './servicio-para-empresas/servicio-para-empresas.component';
import { PortalDeEmpleoComponent } from './portal-de-empleo/portal-de-empleo.component';
import { UneteComoHeadHunterComponent } from './unete-como-headhunter/unete-como-head-hunter.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { DetalleDelTrabajoComponent } from './detalle-del-trabajo/detalle-del-trabajo.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { CompletarPerfilComponent } from './completar-perfil/completar-perfil.component';

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
    path: 'unete-como-headhunter',
    component: UneteComoHeadHunterComponent,
  },
  {
    path: 'trabajos',
    component: TrabajosComponent,
  },
  {
    path: 'detalle-del-trabajo',
    component: DetalleDelTrabajoComponent,
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
  },
  {
    path: 'registrate',
    component: RegistrateComponent,
  },
  {
    path: 'completar-perfil',
    component: CompletarPerfilComponent,
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
