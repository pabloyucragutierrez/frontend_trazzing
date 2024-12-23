import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicioParaEmpresasComponent } from './servicio-para-empresas/servicio-para-empresas.component';
import { PortalDeEmpleoComponent } from './portal-de-empleo/portal-de-empleo.component';
import { UneteComoHeadHunterComponent } from './unete-como-headhunter/unete-como-head-hunter.component';
import { HeaderJobComponent } from './header-job/header-job.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { DetalleDelTrabajoComponent } from './detalle-del-trabajo/detalle-del-trabajo.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { CompletarPerfilComponent } from './completar-perfil/completar-perfil.component';
import { MisPostulacionesComponent } from './mis-postulaciones/mis-postulaciones.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    ServicioParaEmpresasComponent,
    PortalDeEmpleoComponent,
    UneteComoHeadHunterComponent,
    HeaderJobComponent,
    TrabajosComponent,
    IniciarSesionComponent,
    RegistrateComponent,
    DetalleDelTrabajoComponent,
    HeaderLoginComponent,
    CompletarPerfilComponent,
    MisPostulacionesComponent,
    HeaderUserComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
