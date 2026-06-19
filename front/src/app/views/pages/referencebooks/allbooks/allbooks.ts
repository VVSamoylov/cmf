import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-allbooks',
  imports: [RouterModule, MatGridListModule],
  templateUrl: './allbooks.html',
  styleUrl: './allbooks.css',
})
export class Allbooks {}
