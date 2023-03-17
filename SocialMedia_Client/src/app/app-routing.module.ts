import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './Pages/Explore/Explore.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { LoginComponent } from './Pages/Login/Login.component';
import { NotificationsComponent } from './Pages/Notifications/Notifications.component';
import { PostPageComponent } from './Pages/PostPage/PostPage.component';
import { ProfileComponent } from './Pages/Profile/Profile.component';
import { RegisterComponent } from './Pages/Register/Register.component';
import { IsLoggedInServiceService } from './Services/Auth/is-logged-in-service.service';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full'  },
  { path: "home", component: HomeComponent ,canActivate:[IsLoggedInServiceService]  },
  { path: "explore", component: ExploreComponent },
  { path: "notifications", component: NotificationsComponent ,canActivate:[IsLoggedInServiceService]  },
  { path: "profile/:id", component: ProfileComponent },
  { path: "post/:id", component: PostPageComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
