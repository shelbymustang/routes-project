import { browser, element, by } from 'protractor';

export class RoutesProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rp-root h1')).getText();
  }
}
