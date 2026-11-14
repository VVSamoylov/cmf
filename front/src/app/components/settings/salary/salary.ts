import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
//компонент настроек зарплата
@Component({
  selector: 'app-salary',
  imports: [
    MatListModule,
    MatCheckboxModule
  ],
  templateUrl: './salary.html',
  styleUrl: './salary.css',
})
export class Salary {}
