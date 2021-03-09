import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GithubAPIServiceService } from '../github-api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  constructor(private service: GithubAPIServiceService, private toastr: ToastrService) { }
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
  searchForm: FormGroup;
  singleGithubData: any;
  repositoriesData: any;
  gistData: any;
  followers: any;
  ErrorText: string;
  ErrorBlock: any;

  ngOnInit(): void {
    this.initializationform();
  }
  public initializationform(): any {
    this.searchForm = new FormGroup({
      username: new FormControl(''),
    });
  }
  /**
   * Here Create getSingleData Function
   * Here create username keyword using const keyword
   * In username keyword assign textbox value for fetching a data according to username.
   * Here Create @param singleGithubData
   * Here Called all data from api and then assign in singleGithubData keyword.
   */
  public getSingleData(): any {
    const username = this.searchForm.value.username;
    this.service.getSingleGithubData(username).subscribe((data) => {
      this.singleGithubData = data;
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
    this.service.getGistsData().subscribe((data) => {
      this.gistData = data;
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
    this.service.getFollowersData().subscribe((data) => {
      this.followers = data;
    }, err => {
      this.toastr.error(err);
    });
  }
}
