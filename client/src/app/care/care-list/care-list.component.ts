import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  payeurs: SelectItem[];

  professionnels: SelectItem[];

  modePaiements: SelectItem[];

  cartes: SelectItem[];

  dateFilter: Date;

  displayDialog: boolean;

  care: Care = new Care();

  selectedCare: Care;

  newCare: boolean;



  constructor(
    private careService: CareService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    //datasource imitation
    this.loadCares();

    this.beneficiaires = [];
    this.beneficiaires.push({label: 'Vicky', value: 'vicky'});
    this.beneficiaires.push({label: 'Arlette', value: 'arlette'});
    this.beneficiaires.push({label: 'Keyshawn', value: 'keyshawn'});
    this.beneficiaires.push({label: 'Keylia', value: 'keylia'});

    this.cartes = [];
    this.cartes.push({label: 'Carte vitale Vicky', value: 'carte.vicky'});
    this.cartes.push({label: 'Carte vitale Arlette', value: 'carte.arlette'});

    this.payeurs = [];
    this.payeurs.push({label: 'Compte Vicky', value: 'cpte.vicky'});
    this.payeurs.push({label: 'Compte Arlette', value: 'cpte.arlette'});
    this.payeurs.push({label: 'Compte Commun', value: 'cpte.commun'});

    this.modePaiements = [];
    this.modePaiements.push({label: 'CB', value: 'cb'});
    this.modePaiements.push({label: 'Chèque', value: 'cheque'});
    this.modePaiements.push({label: 'Espèces', value: 'especes'});

    this.professionnels = [];
    this.professionnels.push({label: 'Anesthésiste', value: 'anesthesiste'});
    this.professionnels.push({label: 'Cardiologue', value: 'cardiologue'});
    this.professionnels.push({label: 'Chirurgien', value: 'chirurgien'});
    this.professionnels.push({label: 'Dentiste', value: 'dentiste'});
    this.professionnels.push({label: 'Dermatologue', value: 'dermatologue'});
    this.professionnels.push({label: 'Radiologue', value: 'radiologue'});
    this.professionnels.push({label: 'Généraliste', value: 'generaliste'});
    this.professionnels.push({label: 'Laboratoire d\'analyses médicales', value: 'laboratoire'});
    this.professionnels.push({label: 'Ophtalmologiste', value: 'ophtalmologiste'});
    this.professionnels.push({label: 'ORL', value: 'orl'});
    this.professionnels.push({label: 'Pédiatre', value: 'pediatre'});
    this.professionnels.push({label: 'Pharmacie', value: 'pharmacie'});
    this.professionnels.push({label: 'Radiologue', value: 'radiologue'});
    this.professionnels.push({label: 'Urologue', value: 'urologue'});

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

    loadCares() {
      this.careService.getCares().subscribe(cares => {
          this.datasource = cares;
          //console.log(cares);
          this.totalRecords = this.datasource.length;
          this.cares = this.datasource.slice(0, 10);
      });
    }

     save() {
        this.careService.saveCare(this.care).
            subscribe(
                care => {
                    this.care = null;
                    this.displayDialog = false;
                    this.messageService.info('Saved OK', 'Angular Rocks!');
                    this.loadCares();

                },
                error =>  this.messageService.error('Could not save', error)
            );
    }

    delete() {
        const id = this.care.id;
        this.careService.delete(id).
            subscribe(
                response => {
                    const indexToRemove: number = this.cares.indexOf(this.care);
                    this.cares.splice(indexToRemove, 1);
                    this.messageService.info('Deleted OK', 'Angular Rocks!');
                },
                error => this.messageService.error('Could not delete!', error)
            );


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

    findSelectedCareIndex(): number {
        return this.cares.indexOf(this.selectedCare);
    }

    onSelectCalendarInputPrimeng(event: any, dt: any, colField: any, colFilterMatchMode: any) {
      console.log(this.dateFilter);
       const stringDateFilter = this.dateFilter.toDateString().slice(0, 10);
       console.log(stringDateFilter);
       dt.filter(stringDateFilter, colField, colFilterMatchMode);
    }

    onBlurCalendarInputPrimeng(event: any, dt: any, colField: any, colFilterMatchMode: any) {
      console.log(this.dateFilter);
       const beforeDateFilter = this.dateFilter;
       if (!this.dateFilter || this.dateFilter == null) {
         console.log('Reset');
          dt.filter('', colField, colFilterMatchMode);
        }
        this.dateFilter = beforeDateFilter;
      }

    selectCare(care: Care) {
        this.router.navigate(['care', care.id]);
    }





}

