import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [],         // For buttons
  imports: [ CommonModule, MatButtonModule, MatToolbarModule, MatCardModule, MatChipsModule, MatSnackBarModule, MatProgressSpinnerModule, MatPaginatorModule, MatSelectModule], 
  // Add exports so that our module dependencies are available everywhere inside of our application
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatChipsModule, MatSnackBarModule, MatProgressSpinnerModule, MatPaginatorModule, MatSelectModule]
})
export class MaterialModule { }
