import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/* --- */
import { CKEditorModule } from 'ng2-ckeditor';


import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { routerApp } from './router/router-app';
import { ContentService } from './content/content.service';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routerApp,
    FormsModule,
    CKEditorModule,
    HttpModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
