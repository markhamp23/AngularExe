import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatIconModule, MatMenuModule} from "@angular/material";

const appRoutes: Routes = [
  { path: '', component: AppComponent}
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
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





