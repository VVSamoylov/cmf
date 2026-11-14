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
import {WorkTasks} from './views/pages/work-tasks/work-tasks';
import {Allbooks} from './views/pages/referencebooks/allbooks/allbooks';
import {Nomenclature} from './views/pages/referencebooks/nomenclature/nomenclature';
import {Advancedsettings} from './views/pages/advancedsettings/advancedsettings';

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
  { path: 'worktasks', component:WorkTasks},
  { path: 'allreferencebooks', component: Allbooks},
  { path: 'nomenclature', component: Nomenclature},
  { path: 'about', component: About },
  {path: 'advancedsettings', component: Advancedsettings}
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
