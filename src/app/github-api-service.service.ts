import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubAPIServiceService {
  constructor(public http: HttpClient) {
    console.log('Here Github api service called');
  }
  userData: any;
  public APIUrl = 'https://api.github.com/';
  /**
   * for validate a full data I used personal access token and also used access type.
   * Here Used Access Token for access a full data of single User Data.
   */
  public accesstoken = '234b823e261c2cc04f3a6bb673f33822f789f610';
  public accesstype = 'bearer';
  username: any;
  isLoggedIn = false;

  /**
   * Here Create getSingleGithubData Function
   * Here take  @param username
   * This API fetch single user whole Data according to the username.
   * here also username push in this.username keyword.
   */
  public getSingleGithubData(username): Observable<any> {
    this.username = username;
    return this.http.get(this.APIUrl + 'users/' + username + '?access_token=' + this.accesstoken + '&access_type=' + this.accesstype);
  }

  /**
   * Here Create getRepoData function
   * Here Called @param this.username from getSingleGtihub function
   * This API fetch authenticate single user repositories data.
   */
  public getRepoData(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.APIUrl + 'users/' + this.username + '/repos?access_token=' + this.accesstoken + '&access_type=' + this.accesstype);
  }

  /**
   * Here Create getGistsData function
   * Here Called @param this.username from getSingleGtihub function
   * This API fetch authenticate single user Gist Data.
   */
  public getGistsData(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.APIUrl + 'users/' + this.username + '/gists?access_token=' + this.accesstoken + '&access_type=' + this.accesstype);
  }

   /**
    * Here Create getFollowersData function
    * Here Called @param this.username from getSingleGithub function
    * This API fetch authenticate single user Followers data.
    */
  public getFollowersData(): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.APIUrl + 'users/' + this.username + '/followers?access_token=' + this.accesstoken + '&access_type=' + this.accesstype);
  }

  public handleError(err: HttpErrorResponse): Observable<any> {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return throwError(errorMessage);

  }  // END handleError
}
