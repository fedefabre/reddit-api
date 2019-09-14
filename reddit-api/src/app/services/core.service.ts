import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  REDDIT_URL = 'https://www.reddit.com/top/.json?limit=50';
  constructor(private http: HttpClient) { }

  getTopPost() {
    return this.http.get(this.REDDIT_URL);
  }
}
