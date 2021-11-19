import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],         // For buttons
  imports: [ CommonModule, MatButtonModule], 
  // Add exports so that our module dependencies are available everywhere inside of our application
  exports: [MatButtonModule]
})
export class MaterialModule { }
