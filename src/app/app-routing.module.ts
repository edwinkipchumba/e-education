import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'course',component:CourseComponent},
  {path:'joinnow',component:JoinnowComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
