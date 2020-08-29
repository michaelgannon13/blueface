import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getAPI = 'https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=5196d9a629d07f9943867f499d51';
  postAPI = 'https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=5196d9a629d07f9943867f499d51';

  getData() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer 5196d9a629d07f9943867f499d51');
    return this.http.get(this.getAPI);
  }

  postData(val) {
    const headers = { Authorization: 'Bearer 5196d9a629d07f9943867f499d51', 'My-Custom-Header': 'foobar' };
    const body = { title: val };
    this.http.post<any>(this.postAPI, body, { headers }).subscribe(data => {
      val = data;
      console.log('data returned by api response ', data);
    });
  }
}
