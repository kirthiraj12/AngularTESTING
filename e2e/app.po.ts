import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('https://ng-pokedex.firebaseapp.com/pokemon');
  }

  getParagraphText() {
    return element(by.css('.logo')).getText();
  }
}
