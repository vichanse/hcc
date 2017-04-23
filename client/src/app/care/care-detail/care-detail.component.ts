import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { Care } from './../care';
import { MessageService } from './../../shared/service/message.service';
import { CareService } from './../care.service';

@Component({
  selector: 'hcc-care-detail',
  templateUrl: './care-detail.component.html',
  styleUrls: ['./care-detail.component.css']
})
export class CareDetailComponent implements OnInit {

  care: Care;

  private params_subscription: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private careService: CareService) { }

  ngOnInit() {
    this.params_subscription = this.route.params.subscribe(params => {
            const id = params['id'];
            console.log('ngOnInit for care-detail ' + id);

            if (id === 'new') {
                this.care = new Care();
            } else {
                this.careService.getCare(id)
                    .subscribe(care => {
                            this.care = care;
                        },
                        error =>  this.messageService.error('ngOnInit error', error)
                    );
            }
        });
  }

  ngOnDestroy() {
      this.params_subscription.unsubscribe();
    }

}
