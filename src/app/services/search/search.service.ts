import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchTerm: string;

  constructor() { 
    this.searchTerm = "";
  }

  getSearchTerm(): string
  {
    return this.searchTerm;
  }

  setSearchTerm(term: string): void
  {
    this.searchTerm = term;
  }
}
