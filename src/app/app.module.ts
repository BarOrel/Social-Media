import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './Components/AddPost/AddPost.component';
import { PostComponent } from './Components/Post/Post.component';

import { LoginComponent } from './Pages/Login/Login.component';
import { RegisterComponent } from './Pages/Register/Register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddPostComponent,
    PostComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
