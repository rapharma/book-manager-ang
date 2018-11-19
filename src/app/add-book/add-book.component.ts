import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Book } from 'app/model/book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GenericService } from 'app/services/generic.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private router: Router, private genericServ: GenericService) { }
  public confirmationString: string = "New book has been added";
  public isAdded: boolean = false; 

  ngOnInit() {
  }

  addBook(book){ 
    this.genericServ.executePost(book).subscribe(() => {
      this.router.navigate(['/'])
      this.isAdded = true;
    });
  
  }
  
}