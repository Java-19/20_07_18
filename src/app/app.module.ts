import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './auth.service';
import {AuthGuard} from './authguard.service';
import { LoginComponent } from './login/login.component';

const appRouts: Routes = [
  {path:'list',component:ListPageComponent, canActivate:[AuthGuard], children:[
      {path:'item',component:ItemPageComponent}
    ]},
  // {path:'list/item',component:ItemPageComponent},
  {path:'',component:MainPageComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/not-found'}
];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListPageComponent,
    ItemPageComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
