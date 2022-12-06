import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewCoursesComponent } from './view-courses/view-courses.component';

const myRoute : Routes=[
  {
    path:"",
    component:AddCoursesComponent
  },
  {
    path:"view",
    component:ViewCoursesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddCoursesComponent,
    ViewCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
