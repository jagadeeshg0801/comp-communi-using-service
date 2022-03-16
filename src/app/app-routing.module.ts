import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContactDetailsComponent } from './user-contact-details/user-contact-details.component';
import { UserPersonalDetailsComponent } from './user-personal-details/user-personal-details.component';
import { UserProfDetailsComponent } from './user-prof-details/user-prof-details.component';

const routes: Routes = [
  {
    path: 'personalDetails', component: UserPersonalDetailsComponent
  },
  {
    path: 'profDetails', component: UserProfDetailsComponent
  }, {
    path: 'contactDetails', component: UserContactDetailsComponent
  }, {
    path: '', redirectTo: 'personalDetails', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
