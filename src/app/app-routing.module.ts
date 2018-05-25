import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
    {
        path: '',
        component: SidebarViewComponent,
        children: [
            {
                path: '',
                component: ContentViewComponent,
                children: [
                    {
                        path: 'contacts-list',
                        component: ContactsListComponent,
                    },
                    {
                        path: 'contact-form',
                        component: ContactFormComponent
                    },
                    {
                        path: 'contact/:id',
                        component: ContactDetailComponent
                    },
                    {
                        path: '',
                        redirectTo: '/contacts-list',
                        pathMatch: 'full'
                    },
                    {
                        path: '**',
                        component: NotFoundComponent
                    }
                ],
            }
        ]
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }