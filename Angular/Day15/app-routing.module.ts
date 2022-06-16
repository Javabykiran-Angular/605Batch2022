import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerComponent } from './follower/follower.component';
import { HomeComponent } from './home/home.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { QueryParamaterComponent } from './query-paramater/query-paramater.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:'Page1',component:Page1Component
  },
  {
    path:'Page2',component:Page2Component
  },
  {
    path:'Page3',component:Page3Component
  },
  {
    path:'Follower',component:FollowerComponent
  },
  {
    path:'Myfollower',component:MyfollowerComponent
  },
  {
    path:'QueryParameter',component:QueryParamaterComponent
  },
  {
    path:"**",component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
