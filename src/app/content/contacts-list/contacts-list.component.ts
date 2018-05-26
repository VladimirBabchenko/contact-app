import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactsService } from '../../contacts.service';

import { Contact } from '../../contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[];

  constructor(
    private contactService: ContactsService
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts)
  }

  isHide(menu) {
    menu.hidden = !menu.hidden;
  }
}
