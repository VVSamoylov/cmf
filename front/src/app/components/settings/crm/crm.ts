import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-crm',
  imports: [
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  templateUrl: './crm.html',
  styleUrl: './crm.css',
})
export class Crm {}
