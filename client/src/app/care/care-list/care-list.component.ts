import { Component, OnInit } from '@angular/core';
import { DataTable, LazyLoadEvent, SelectItem, MultiSelect, Dropdown, Calendar } from 'primeng/primeng';
import { MdDialog } from '@angular/material';
import { Care } from './../care';
import { PageResponse } from './../../shared/support/paging';

import { CareService } from './../care.service';
import { MessageService } from './../../shared/service/message.service';

@Component({
  selector: 'hcc-care-list',
  templateUrl: './care-list.component.html',
  styleUrls: ['./care-list.component.css']
})
export class CareListComponent implements OnInit {

  // list is paginated
  currentPage: PageResponse<Care> = new PageResponse<Care>(0, 0, []);

  datasource: Care[];

  cares: Care[];

  totalRecords: number;

  beneficiaires: SelectItem[];

  dateFilter: Date;

  displayDialog: boolean;

  care: Care = new Care();

  selectedCare: Care;

  newCare: boolean;

  constructor(
    private careService: CareService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    //datasource imitation
        this.careService.getCares().subscribe(cares => {
            this.datasource = cares;
            console.log(cares);
            this.totalRecords = this.datasource.length;
            this.cares = this.datasource.slice(0, 10);
        });

    this.beneficiaires = [];
    this.beneficiaires.push({label: 'Vicky', value: 'Vicky'});
    this.beneficiaires.push({label: 'Arlette', value: 'Arlette'});
    this.beneficiaires.push({label: 'Keyshawn', value: 'Keyshawn'});
    this.beneficiaires.push({label: 'Keylia', value: 'Keylia'});

  }



  /**
     * Invoked automatically by primeng datatable.
     */
    loadPage(event: LazyLoadEvent) {


        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network
        setTimeout(() => {
            if (this.datasource) {
                this.cares = this.datasource.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    }

    showDialogToAdd() {
        this.newCare = true;
        this.care = new Care();
        this.displayDialog = true;
    }

    save() {
        if(this.newCare)
            this.cares.push(this.care);
        else
            this.cares[this.findSelectedCarIndex()] = this.care;

        this.care = null;
        this.displayDialog = false;
    }

    delete() {
        this.cares.splice(this.findSelectedCarIndex(), 1);
        this.care = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCare = false;
        this.care = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Care): Care {
        const care = new Care();
        for(let prop in c) {
            care[prop] = c[prop];
        }
        return care;
    }

    findSelectedCarIndex(): number {
        return this.cares.indexOf(this.selectedCare);
    }





}

