import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Connect } from './connect.model';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePost(
    name: string,
    email: string,
    phone: string,
    purpose: string
  ) {
    const connect: Connect = {
      name: name,
      email: email,
      phone: phone,
      purpose: purpose,
    };
    this.http
      .post('https://soundar-portfolio-1995-default-rtdb.europe-west1.firebasedatabase.app/posts.json', connect)
      .subscribe((responseData) => {
        console.log(responseData);
        alert(
          'Data Recorderd Successfully! Our Team will response to you soon...'
        );
      }),
      (error) => {
        this.error.next(error.message);
        alert(error.message);
      };
  }
}
