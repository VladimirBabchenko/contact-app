import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarViewComponent } from './sidebar/sidebar-view/sidebar-view.component';
import { UserBlockComponent } from './sidebar/user-block/user-block.component';
import { SearchBlockComponent } from './sidebar/search-block/search-block.component';
import { CategoriesComponent } from './sidebar/categories/categories.component';
import { BirthdayComponent } from './sidebar/birthday/birthday.component';
import { AddNewContactComponent } from './sidebar/add-new-contact/add-new-contact.component';
import { ContentViewComponent } from './content/content-view/content-view.component';
import { HeaderContactsComponent } from './content/header-contacts/header-contacts.component';
import { ContactsListComponent } from './content/contacts-list/contacts-list.component';
import { ContactFormComponent } from './content/contact-form/contact-form.component';
import { ContactDetailComponent } from './content/contact-detail/contact-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarViewComponent,
    UserBlockComponent,
    SearchBlockComponent,
    CategoriesComponent,
    BirthdayComponent,
    AddNewContactComponent,
    ContentViewComponent,
    HeaderContactsComponent,
    ContactsListComponent,
    ContactFormComponent,
    ContactDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
