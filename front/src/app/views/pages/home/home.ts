import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-home',
  imports: [MatGridListModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
