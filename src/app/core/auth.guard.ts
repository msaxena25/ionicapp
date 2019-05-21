import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private storage: Storage, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.storage.get('isUserLoggedIn').then((val) => {
      if (val) {
        console.log('User is logged In', val);
        this.router.navigateByUrl('search');
        return false;
      
      }else {
        return true;
      }

    });

   
  }


}
