import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { OrgnisationPageModule } from '../pages/orgnisation/orgnisation.module';
import { ReposPageModule } from '../pages/repos/repos.module';
import { UsersPageModule } from '../pages/users/users.module';
import { ContactPageModule } from '../pages/contact/contact.module';
import { UserDetailsPageModule } from '../pages/user-details/user-details.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubUsersProvider } from '../providers/github-users/github-users';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    OrgnisationPageModule,
    ReposPageModule,
    UsersPageModule,
    ContactPageModule,
    UserDetailsPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsersProvider,
  ]
})
export class AppModule {}
