import { SearchService } from './../services/search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchString: string;

  constructor(private searchService: SearchService) { 
    this.searchString = "";
  }

  ngOnInit() {
  }

  getSearchParameter() 
  {
    this.searchService.setSearchTerm(this.searchString);
  }

}
