import { Component } from '@angular/core';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items: any;

	constructor(public dataService: Data) {

	}

	ionViewDidLoad(){

	    this.items = [];

	    this.dataService.getDocuments().then((result) => {
	      this.items = result;
	    });

	}

	addData(){

		let date = new Date();

		let newDoc = {
		  '_id': date,
		  'message': date.getTime()
		};

		this.dataService.addDocument(newDoc);
	}

}
