import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],         // For buttons
  imports: [ CommonModule, MatButtonModule, MatToolbarModule, MatCardModule], 
  // Add exports so that our module dependencies are available everywhere inside of our application
  exports: [MatButtonModule, MatToolbarModule, MatCardModule]
})
export class MaterialModule { }
