import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact.model';

const CONTACTS: Contact[] = [
    new Contact(1, "Vova", +3503152210, "Beduin", "good friend", "be@be", '02.12.90', "info", 'https://www.instagram.com/platinum_dent/', 'https://www.facebook.com/shoe.shop.908'),
    new Contact(2, "Vanya", +3503152211, "Beduinskiy", "good friend", "be@be", '02.12.90', "info", 'https://www.instagram.com/platinum_dent/', 'https://www.facebook.com/shoe.shop.908'),
    new Contact(3, "Genya", +3503152212, "Bed", "good friend", "be@be", '02.12.90', "info", 'https://www.instagram.com/platinum_dent/', 'https://www.facebook.com/shoe.shop.908'),
    new Contact(4, "Rubens", +3503152213, "Bedon", "good friend", "be@be", '02.12.90', "info", 'https://www.instagram.com/platinum_dent/', 'https://www.facebook.com/shoe.shop.908'),
    new Contact(5, "Ahmet", +3503152214, "Bedan", "good friend", "be@be", '02.12.90', "info", 'https://www.instagram.com/platinum_dent/', 'https://www.facebook.com/shoe.shop.908'),
]

@Injectable()
export class ContactsService {
    getContacts() {
        return of(CONTACTS);
    }

    getContact(id: number | string) {
        return this.getContacts().pipe(
            map(contacts => contacts.find(contact =>
                contact.id === +id))
        )
    }
}