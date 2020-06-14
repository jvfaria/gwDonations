import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarModule } from 'ng-sidebar';
import { DoacoesComponent } from './pages/dashboard/doacoes/doacoes.component';
import { ModalBasicComponent } from './pages/modal-basic/modal-basic.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    DashboardComponent,
    DoacoesComponent,
    ModalBasicComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    SidebarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
