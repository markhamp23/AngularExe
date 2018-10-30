import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatIconModule, MatMenuModule} from "@angular/material";
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";

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
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





