import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './Components/AddPost/AddPost.component';
import { FriendsNavbarComponent } from './Components/FriendsNavbar/FriendsNavbar.component';
import { PostComponent } from './Components/Post/Post.component';
import { SideNavbarComponent } from './Components/SideNavbar/SideNavbar.component';
import { ExploreComponent } from './Pages/Explore/Explore.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { LoginComponent } from './Pages/Login/Login.component';
import { NotificationsComponent } from './Pages/Notifications/Notifications.component';
import { PostPageComponent } from './Pages/PostPage/PostPage.component';
import { ProfileComponent } from './Pages/Profile/Profile.component';
import { RegisterComponent } from './Pages/Register/Register.component';
import { DateAsAgoPipe } from './shared/date-as-ago.pipe';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AddPostComponent,
    PostComponent,
    SideNavbarComponent,
    FriendsNavbarComponent,
    ExploreComponent,
    NotificationsComponent,
    PostPageComponent,
    ProfileComponent,
    DateAsAgoPipe
    
 
    
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
   

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DateAsAgoPipe
  ]
})
export class AppModule { }
