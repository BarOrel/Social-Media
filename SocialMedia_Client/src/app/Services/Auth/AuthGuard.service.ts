import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService:AuthService,private router:Router ) { }

  canActivate(){
  if(this.authService.isAdmin() =='true')
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
