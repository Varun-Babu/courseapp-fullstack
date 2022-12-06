import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute : Routes=[
  {
    path:"",
    component:AddCoursesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddCoursesComponent
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
