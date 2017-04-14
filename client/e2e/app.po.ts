import { browser, element, by } from 'protractor';

export class HccPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hcc-root h1')).getText();
  }
}
