import { Component, OnInit } from '@angular/core';
import { MessageService } from './shared/service/message.service';

@Component({
  selector: 'hcc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.info('HomeComponent loaded', 'Vichanse Rocks!');
  }

}
