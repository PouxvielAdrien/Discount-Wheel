import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LaunchPageComponent} from "./launch-page/launch-page.component";
import {DiscountComponent} from "./discount/discount.component";
import {AppComponent} from "./app.component";

/* Routes definition and export */
const WheelRouting: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'root' },
  { path: 'root', component: AppComponent },
  { path: 'launch-page', component: LaunchPageComponent },
  { path: 'discount', component: DiscountComponent },
  { path: '404', component: LaunchPageComponent },
  { path: '**', redirectTo: 'launch-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(WheelRouting)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

