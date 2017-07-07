import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LayoutComponent} from "./layout.component";

@NgModule({

  imports: [

    CommonModule,
    RouterModule.forChild([{
      path: "", component: LayoutComponent,
      children: [
        {path: 'user', loadChildren : 'app/user/user.module#UserModule'}
      ]
    }])
  ],
  declarations: [LayoutComponent]
})


export class LayoutModule { }
