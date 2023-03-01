import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInServiceService implements CanActivate {

  constructor(private authService:AuthService,private router:Router) { }
  canActivate() {
    if(this.authService.isLoggedIn())
  { 
    return true;
  }

  else
  { 
    this.router.navigate(['']);
    return false 
  }   

    
  }
}
