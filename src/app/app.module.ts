import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuAppComponent } from './meu-app/meu-app.component';
import { AlunosService } from './services/alunos.service';

@NgModule({
  declarations: [
    AppComponent,
    MeuAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AlunosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
