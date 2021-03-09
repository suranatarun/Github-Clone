import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class GithubAPIServiceService {
  constructor(public http: HttpClient) {}
  userData: any;
  public APIUrl = 'https://api.github.com/';
  /**
   * for validate a full data I used personal access token and also used access type.
   * Here Used Access Token for access a full data of single User Data.
   */
  public accesstoken = '6b4c8906d57511bf6d34b80ba8ed020b19650177';
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
    return this.http.get(
      this.APIUrl + 'users/' + username + '?access_token=' + this.accesstoken +
      '&access_type=' + this.accesstype)
      .pipe(catchError(this.handleError));
  }

  /**
   * Here Create getRepoData function
   * Here Called @param this.username from getSingleGtihub function
   * This API fetch authenticate single user repositories data.
   */
  public getRepoData(): Observable<any> {
    return this.http.get(
      this.APIUrl + 'users/' + this.username + '/repos?access_token=' + this.accesstoken +
      '&access_type=' + this.accesstype)
      .pipe(catchError(this.handleError));
  }

  /**
   * Here Create getGistsData function
   * Here Called @param this.username from getSingleGtihub function
   * This API fetch authenticate single user Gist Data.
   */
  public getGistsData(): Observable<any> {
    return this.http.get(
      this.APIUrl + 'users/' + this.username + '/gists?access_token=' + this.accesstoken +
      '&access_type=' + this.accesstype)
      .pipe(catchError(this.handleError));
  }

   /**
    * Here Create getFollowersData function
    * Here Called @param this.username from getSingleGithub function
    * This API fetch authenticate single user Followers data.
    */
  public getFollowersData(): Observable<any> {
    return this.http.get(
      this.APIUrl + 'users/' + this.username + '/followers?access_token=' + this.accesstoken +
      '&access_type=' + this.accesstype)
      .pipe(catchError(this.handleError));

  }

  public handleError(err: HttpErrorResponse): any {
    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}`;

    } // end condition *if

    return throwError(errorMessage);
  }
}
