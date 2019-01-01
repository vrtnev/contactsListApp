import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Contact} from '../classes/contact';
import {CONTACTS} from '../mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  getContacts(): Observable<Contact[]> {
    return of(CONTACTS);
  }
  getContact(id: number): Observable<Contact> {
    return of(CONTACTS.find(contact => contact.id === id));
  }

  constructor() { }
}
