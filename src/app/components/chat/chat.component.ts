import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat: Message[];
  now: Date;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.now = new Date();
    this.messageService.getChat().subscribe(chat => {
      // console.log(chat);
      chat.sort((a, b) => (a.time > b.time) ? 1 : - 1);
      this.chat = chat;
    });
  }

}
