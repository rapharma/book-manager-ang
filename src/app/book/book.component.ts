import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
 

import { Router } from '@angular/router';
import { Book } from 'app/model/book';
import { GenericService } from 'app/services/generic.service';

@Component({
  selector: 'app-home',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(route: Router, private genericServ: GenericService) { }
  
  public books: Book[] = [];
  
  ngOnInit() {

    this.listBooks();

  }

  listBooks(){
  
    this.genericServ.executeGet().subscribe((res: Book[]) => { 
      this.books = res;
      console.log('res get' + JSON.stringify(this.books)) }
    );

  }
   
  deleteBook(id) {
    if (confirm("Are you sure?")) {
      
      this.genericServ.executeDelete(id).subscribe(() => {
      console.log('deleted')
      
    });

    }
    
  }
 
}
