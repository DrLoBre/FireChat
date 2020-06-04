import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Message } from '../models/Message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  chatCollection: AngularFirestoreCollection<Message>;
  chat: Observable<Message[]>;
  username: string;


  constructor(public firestore: AngularFirestore) {
    this.chat = this.firestore.collection('Chat').valueChanges() as Observable<Message[]>;
  }

  getChat() {
    return this.chat;
  }

  sendMessage(message: any) {
    this.firestore.collection('Chat').add(message);
  }
}
