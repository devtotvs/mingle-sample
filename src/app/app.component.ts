import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MingleService, MingleError } from '@totvs/mobile-mingle';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = '';

  constructor(private _platform: Platform, private _statusBar: StatusBar, private _splashScreen: SplashScreen, private _mingleService: MingleService) {
    this._init();
  }

  private _init(): void {
    this._platform.ready().then(() => {
      this._mingleService.init().subscribe(
        (res) => {
          this._mingleService.getUser().subscribe(
            (user) => {
              let loggedUser = this._mingleService.getSessionInfo().user;
              if(!loggedUser || !user) {
                console.log('Sessão não iniciada');
                this.rootPage = LoginPage;
              } else {
                this.rootPage = HomePage;
              }
            }
          )
        }
      );
      this._statusBar.styleDefault();
      this._splashScreen.hide();
    });
  }
}

