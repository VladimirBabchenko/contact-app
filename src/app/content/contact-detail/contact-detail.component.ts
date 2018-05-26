import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from '../../contacts.service';

import { Contact } from '../../contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contactsService.getContact(id)
      .subscribe(contact => this.contact = contact)
  }

}
