import { Component,signal } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-company',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatGridListModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule, 
    MatDatepickerModule
  ],
  templateUrl: './company.html',
  styleUrl: './company.css',
})
export class Company {
  value = signal<Date | undefined>(undefined);
}
