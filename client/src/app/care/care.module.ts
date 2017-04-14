import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CareListComponent } from './care-list/care-list.component';
import { CareDetailComponent } from './care-detail/care-detail.component';
import { CareRoutingModule } from './care-routing.module';

import { CareService } from './care.service';

import { MaterialModule } from '@angular/material';
import { DataTableModule, ButtonModule, DropdownModule, MultiSelectModule, CalendarModule, DialogModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CareRoutingModule,
    MaterialModule,
    DataTableModule,
    ButtonModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    DialogModule

  ],
  declarations: [CareListComponent, CareDetailComponent],
  providers: [ CareService ]
})
export class CareModule { }
