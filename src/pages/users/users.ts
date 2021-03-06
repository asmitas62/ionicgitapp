import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDetailsPage } from '../user-details/user-details'

import { GithubUsersProvider } from '../../providers/github-users/github-users';
import { User } from '../../models/iuser';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: User[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _githubUsersProvider: GithubUsersProvider) {
      this._githubUsersProvider.load().subscribe(users => {
        this.users = users;
        console.log('users===>',users)
      })
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad UsersPage');
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }


  

}
