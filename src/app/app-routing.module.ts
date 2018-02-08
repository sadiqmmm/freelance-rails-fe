import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';

const routers: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomepageComponent },
 { path: 'documents', component: DocumentsComponent },
]

@NgModule({ 
	imports: [ RouterModule.forRoot(routers) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}