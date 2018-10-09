import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatIconModule, MatMenuModule} from "@angular/material";
import {PortaComponent} from "./porta/porta.component";
import {PortaModule} from "./porta/porta.module";


const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'porta', loadChildren: './porta/porta.module#Portamodule'},
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    PortaModule
  ],
  exports: [
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    PortaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





