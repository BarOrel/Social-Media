import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './Components/AddPost/AddPost.component';
import { FriendsNavbarComponent } from './Components/FriendsNavbar/FriendsNavbar.component';
import { PostComponent } from './Components/Post/Post.component';
import { SideNavbarComponent } from './Components/SideNavbar/SideNavbar.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { LoginComponent } from './Pages/Login/Login.component';
import { RegisterComponent } from './Pages/Register/Register.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AddPostComponent,
    PostComponent,
    SideNavbarComponent,
    FriendsNavbarComponent
 
    
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
