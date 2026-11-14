import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
// Компания
@Component({
  selector: 'app-company',
  imports: [
    MatListModule,
    MatCardModule, 
    MatChipsModule, 
    MatProgressBarModule,
    MatGridListModule,
    RouterModule
  ],
  templateUrl: './company.html',
  styleUrl: './company.css',
})
export class Company {

  test(a:String){
    console.log(a);
  }
}
