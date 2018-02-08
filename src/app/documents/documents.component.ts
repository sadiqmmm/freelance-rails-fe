import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {

	// Hardcoded params
	pageTitle: string = "Document Dashboard"

	// interface
	documents: Document[] = [
		{
			title: "My first Document",
			description: "Great Docs",
			file_url: "http://google.com",
			updated_at: "11/11/18",
			image_url: "http://google.com",
		},	

		{
			title: "My 2 Document",
			description: "Great Docs",
			file_url: "http://google.com",
			updated_at: "11/11/18",
			image_url: "http://google.com",
		},	

		{
			title: "My 3 Document",
			description: "Great Docs",
			file_url: "http://google.com",
			updated_at: "11/11/18",
			image_url: "http://google.com",
		},	

		{
			title: "My 4 Document",
			description: "Great Docs",
			file_url: "http://google.com",
			updated_at: "11/11/18",
			image_url: "http://google.com",
		},	

		{
			title: "My 5 Document",
			description: "Great Docs",
			file_url: "http://google.com",
			updated_at: "11/11/18",
			image_url: "http://google.com",
		},	
	]
}