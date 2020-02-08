import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return 'I am wikipedia search results';
  }
}

// https://en.wikipedia.org/w/api.php?
//   action=query&
//   format=json&
//   list=search&
//   utf8=1&
//   srsearch=space
