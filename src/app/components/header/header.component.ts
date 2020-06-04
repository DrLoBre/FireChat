import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.username = 'Anonymus';
  }

  setUsername(username: string) {
    this.messageService.username = username;
  }

}
