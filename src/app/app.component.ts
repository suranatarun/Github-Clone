import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubAPIServiceService } from './github-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Github-Clone';
  constructor(public service: GithubAPIServiceService, private router: Router) {}
  ngOnInit(): void {
  }
  public logout(): any {
    this.router.navigate(['Github-Login']);
  }
}
