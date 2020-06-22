import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/Message';
import { MessageService } from '../../services/message.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-send-line',
  templateUrl: './send-line.component.html',
  styleUrls: ['./send-line.component.css']
})
export class SendLineComponent implements OnInit {

  user: firebase.User;

  constructor(private messageService: MessageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserState()
    .subscribe( user => {
      this.user = user;
    });
  }

  onSend(text: string) {

    const message = new Message();
    message.author = this.user.displayName;
    message.text = text;
    message.time = new Date();

    this.messageService.sendMessage(message.toPlainObj());
  }

  goToBotom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

}
