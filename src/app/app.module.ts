import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPersonalDetailsComponent } from './user-personal-details/user-personal-details.component';
import { UserProfDetailsComponent } from './user-prof-details/user-prof-details.component';
import { UserContactDetailsComponent } from './user-contact-details/user-contact-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserPersonalDetailsComponent,
    UserProfDetailsComponent,
    UserContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
