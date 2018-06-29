import { PROVIDERS } from './../providers/providers';
import { PAGES } from './../pages/pages';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Configuration, MingleModule } from '@totvs/mobile-mingle';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ThfModule } from '@totvs/thf-ui';
import { RouterModule } from '@angular/router';

export function mingleFactory() {

    let config = new Configuration();

    config.app_identifier = '<APP_ID>';
    config.environment = '<DEV | PROD>';
    config.server = '<http | https + MINGLE_SERVER_ADDRESS>';
    config.modules.crashr = '<true | false>';
    config.modules.usage_metrics = '<true | false>';
    config.modules.gateway = '<true | false>';

    return config;
  }

@NgModule({
  declarations: [
    MyApp,
    PAGES
  ],
  imports: [
    ThfModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot([]),
    MingleModule.forRoot({
			provide: Configuration,
			useFactory: mingleFactory
		})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PAGES
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PROVIDERS
  ]
})
export class AppModule {}
