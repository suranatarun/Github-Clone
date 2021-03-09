import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GithubAPIServiceService } from '../github-api-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private service: GithubAPIServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }
  /**
   * Here Create singleGithubData keyword
   * Here this keyword called in getSingleData Function
   * Here this keyword used for fetching from api followers data according to authenticated user.
   * @param singleGithubData;
   *
   * Here Create repositoriesData keyword
   * Here this keyword called in repoData Function
   * Here this keyword used for fetching from api followers data according to authenticated user.
   * @param repositoriesData;
   *
   * Here Create gistData keyword
   * Here this keyword called in gistsData Function
   * Here this keyword used for fetching from api followers data according to authenticated user.
   * @param gistData;
   *
   * Here Create followers keyword
   * Here this keyword called in FollowersData Function
   * Here this keyword used for fetching from api followers data according to authenticated user.
   * @param followers;
   */
  type: any; /** This object is used for condition in input item which is using for slider */
  options: any; /** This object is used for set condition */
  singleGithubData: any;
  repositoriesData: any; /** Here this keyword called for fetch repositories data */
  gistData: any; /** Here this keyword called for gist data  */
  followers: any; /** Here this keyword called for followers data */
  userParamData: any;
  UserName: any;
  /**
   * Here Create getSingleData Function
   * Here create username keyword using const keyword
   * In username keyword assign textbox value for fetching a data according to username.
   * Here Create @param singleGithubData
   * Here Called all data from api and then assign in singleGithubData keyword.
   */
  ngOnInit(): void {
    this.getSingleGithubData();
  }

  public getSingleGithubData(): any {
    const username = this.route.snapshot.paramMap.get('username');
    this.service.getSingleGithubData(username).subscribe((result) => {
      this.singleGithubData = result;
      this.service.isLoggedIn = true;
    }, err => {
      this.toastr.error(err);
    });
  }
  /**
   * Here Called repodata according to a user
   * Here Create reposData Function
   * Here Create @param repositoriesData
   * Here Called all data from api and then assign in repositoriesData keyword.
   */
  public reposData(): any {
    this.toastr.info('You see repositories data of authenticated user ' + this.service.username);
    this.service.getRepoData().subscribe((data) => {
      this.repositoriesData = data;
    }, err => {
      this.toastr.error(err);
    });
  }
  /**
   * Here Called gistData according to a user
   * Here Create gistsData Function
   * Here Create @param gistData
   * Here Called all data from api and then assign in gistData keyword.
   */
  public gistsData(): any {
    this.toastr.info('You see Gists data of authenticated user ' + this.service.username);
    this.service.getGistsData().subscribe((data) => {
      this.gistData = data;
      console.log(this.gistData);
    }, err => {
      this.toastr.error(err);
    });
  }
  /**
   * Here Called repodata according to a user
   * Here Create reposData Function
   * Here Create @param repositoriesData
   * Here Called all data from api and then assign in repositoriesData keyword.
   */
  public FollowersData(): any {
    this.toastr.info('You see Followers data of authenticated user ' + this.service.username);
    this.service.getFollowersData().subscribe((data) => {
      this.followers = data;
      console.log(this.followers);
    },  err => {
      this.toastr.error(err);
    });
  }
  /**
   * Here Called router for navigate a page
   * this function called on button which button name is Search Username.
   */
  public OpenSearchDialog(): any {
    this.router.navigate(['/search-view']);
  }
}
