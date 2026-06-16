import {RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home } from './views/pages/home/home';
import { About } from './views/pages/about/about';
import {Buys} from './views/pages/buys/buys';
import {Company} from './views/pages/company/company';
import {Money} from './views/pages/money/money';
import {Sales} from './views/pages/sales/sales';
import {Warehouse} from './views/pages/warehouse/warehouse';
import { Sidebar } from './sidebar/sidebar';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'buys', component: Buys },
  { path: 'company', component: Company },
  { path: 'money', component: Money },
  { path: 'sales', component: Sales },
  { path: 'warehouse', component: Warehouse },
  { path: 'about', component: About }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes),
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
