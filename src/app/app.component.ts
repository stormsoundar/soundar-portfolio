import { Component, ViewChild } from '@angular/core';
import { ConnectService } from './connect.service';
import { Connect } from './connect.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'soundar-portfolio';
  collapsed = true;
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;

  @ViewChild('connectForm') connect;

  constructor(private http: HttpClient, private connectService: ConnectService) {}

  onSubmit(connect: Connect){
    this.connectService.createAndStorePost(connect.name, connect.email, connect.phone, connect.purpose);
    console.log(connect.name, connect.email, connect.phone, connect.purpose);
    this.connect.resetForm();
  }
}
