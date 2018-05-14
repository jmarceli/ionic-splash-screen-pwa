import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform) {
    this.handleSplashScreen()
  }

  // hide #splash-screen when app is ready
  async handleSplashScreen(): Promise<void> {
    try {
      // wait for App to finish loading
      await this.platform.ready()
    } catch (error) {
      // TODO: there is probably nothing we can do about that...
    }
    // Here you may
    
    const splash = document.getElementById('splash-screen')
    // start opacity animation
    splash.style.opacity = '0'
    // remove after it is hidden
    setTimeout(() => { splash.remove() }, 300)
  }
}
