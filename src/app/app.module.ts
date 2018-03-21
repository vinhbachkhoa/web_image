import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* --- */


import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { routerApp } from './router/router-app';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideBarComponent,
    HomeComponent,
    AdminComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routerApp,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
