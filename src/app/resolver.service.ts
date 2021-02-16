import { GithubAPIServiceService } from './github-api-service.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()

export class GitHubResolver implements Resolve<Server>{

  constructor(private service: GithubAPIServiceService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server>
  | Promise<Server> | Server {
    return this.service.getSingleGithubData(this.service.username);
  }
}
