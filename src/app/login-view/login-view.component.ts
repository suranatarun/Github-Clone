import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GithubAPIServiceService } from '../github-api-service.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  Errormessage: string;
  userName: any;
  ErrorBlock;
  ErrorText: any;
   /**
    * Here Used Params
    * @params RepositoriesData
    */
  RepositoriesData;
  constructor(private service: GithubAPIServiceService, private router: Router, private toastr: ToastrService) { }
  /**
   * Here Used loginForm keyword
   * loginForm used for FormGroup
   * login keyword called in initialization form
   */
  loginForm: FormGroup;
  ngOnInit(): void {
    this.initializationForm();
  }
  /**
   * Here Create initializationForm function
   * Here Called loginForm keyword inside class using this keyword.
   * Here put FormControl on username
   * this username keyword called in html using formCOntrolName keyword for control textbox.
   */
  public initializationForm(): any {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
    });
  }
  /**
   * Here Called HereLogin Function
   * const username keyword get value from textbox
   * and then assign username keyword for fetching data by username.
   * and called data from api then assign whole data of api in @param data and also console to see data in chrome console window.
   * here called also data share one page to another page using some keyword on both page
   * Here also data is valid then move Github-home Page
   */
  public HereLogin(): any {
    const username = this.loginForm.value.username;
    this.service.getSingleGithubData(username).subscribe((data) => {
      this.toastr.success('Your are successsfully login ' + username);
      this.service.userData = data;
      this.router.navigate(['Github-Home', username]);
    }, err => {
      this.Errormessage = 'Here Your Enter Username is Invalid';
      this.toastr.error('Here Your Enter UserName is Invalid');

      if (err.status === 404) {
        this.ErrorText = 'You got Not Found Component';
      }
      else if (err.status === 401) {
        this.ErrorText = 'User is Not authorized or a Token is expired or removed';
      }
      else if (err.status === 304) {
        this.ErrorText = 'API is not modified';
      }
      else {
        this.ErrorText = 'Forbidden Error';
      }
      console.log(this.ErrorText);
    });
  }
}
