import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  changeAuthStatus(login: string) {
    if(login === 'login'){
      this.auth.setAuth(true);
    }else{
      this.auth.setAuth(false);
    }
  }
}
