import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {Company} from '@components/settings/company/company';
import {Crm} from '@components/settings/crm/crm';
import {Salary} from '@components/settings/salary/salary';
import {Purchasing} from '@components/settings/purchasing/purchasing';
import {Work} from '@components/settings/work/work';
import {Production} from '@components/settings/production/production';
import {Money} from  '@components/settings/money/money';
import {Selers} from '@components/settings/selers/selers';
import {Personalsetting} from '@components/settings/personalsetting/personalsetting';
import {Integrationprogram} from '@components/settings/integrationprogram/integrationprogram';
import {Swapdoc} from '@components/settings/swapdoc/swapdoc';
import {Administrationsetting} from '@components/settings/administrationsetting/administrationsetting';
@Component({
  selector: 'app-advancedsettings',
  imports: [MatTabsModule,
    Company,
    Crm,
    Salary,
    Purchasing,
    Work,
    Production,
    Money,
    Selers,
    Personalsetting,
    Integrationprogram,
    Swapdoc,
    Administrationsetting
  ],
  templateUrl: './advancedsettings.html',
  styleUrl: './advancedsettings.css',
})
export class Advancedsettings {}
