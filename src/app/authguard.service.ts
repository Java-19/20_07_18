import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private auth:AuthService, private route: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggined()){
      return true;
    }else{
      this.route.navigate(['/login'],{
        queryParams:{
          return: state.url
        }
      });
    }
    return false;
  }

}
