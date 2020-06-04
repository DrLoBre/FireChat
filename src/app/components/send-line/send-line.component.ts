import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/Message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-send-line',
  templateUrl: './send-line.component.html',
  styleUrls: ['./send-line.component.css']
})
export class SendLineComponent implements OnInit {

  name: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.name = 'Anonymus';
  }

  onSend(text: string) {
    if (!this.messageService.username) {
      this.name = 'Anonymus';
    }
    else {
      this.name = this.messageService.username;
    }

    const message = new Message();
    message.author = this.name;
    message.text = text;
    message.time = new Date();

    this.messageService.sendMessage(message.toPlainObj());
  }

  goToBotom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

}
