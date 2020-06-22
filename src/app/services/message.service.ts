import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Message } from '../models/Message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  chatCollection: AngularFirestoreCollection<Message>;
  chat: Observable<Message[]>;

  constructor(public firestore: AngularFirestore) {
    this.chat = this.firestore.collection('Chat').valueChanges({ idField: 'eventId' }) as unknown as Observable<Message[]>;
  }

  getChat() {
    return this.chat;
  }

  sendMessage(message: any) {
    this.firestore.collection('Chat').add(message);
  }

  deleteMessage(data) {
    return this.firestore
        .collection('Chat')
        .doc(data.eventId)
        .delete();
 }
}
