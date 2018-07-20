export class AuthService {
  private isAuth: boolean = false;

  isLoggined():boolean{
    return this.isAuth;
  }

  setAuth(status:boolean){
    this.isAuth = status;
  }
}
