import { Component, OnInit } from '@angular/core';
import { GithubAPIServiceService } from './github-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Github-Clone';
  constructor(public service: GithubAPIServiceService) {}
  ngOnInit(): void {
  }
}
