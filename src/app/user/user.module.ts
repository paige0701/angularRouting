import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { FindpwComponent } from './findpw/findpw.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: UserComponent},
      {path: "register", component: RegisterComponent},
      {path: "findpw", component: FindpwComponent}

    ])
  ]
  ,
  exports: [
    RouterModule
  ],
  declarations: [ RegisterComponent, FindpwComponent, UserComponent]
})
export class UserModule { }
