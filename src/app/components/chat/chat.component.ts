import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  chat: Message[];
  now: Date;

  constructor(public messageService: MessageService) { }

  ngAfterViewChecked(): void {
    console.log('Fenster verändert');
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }


  ngOnInit(): void {
    this.now = new Date();
    this.messageService.getChat().subscribe(chat => {
      // console.log(chat);
      chat.sort((a, b) => (a.time > b.time) ? 1 : - 1);
      this.chat = chat;
    });
  }

}
