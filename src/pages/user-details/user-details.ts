import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { GithubUsersProvider } from '../../providers/github-users/github-users';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  login: string;
  user:Object;

  constructor(private navParams: NavParams,
  private _githubUsersProvider:GithubUsersProvider) {
    this.login = this.navParams.get('login');
    this._githubUsersProvider.loadDetails(this.login).subscribe(user => {
      this.user = user;
      console.log(user)
    })
  }
}