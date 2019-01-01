import { Component, OnInit } from '@angular/core';
import {Contact} from '../../classes/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }
  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

}
