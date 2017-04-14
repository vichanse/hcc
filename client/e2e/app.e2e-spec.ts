import { HccPage } from './app.po';

describe('hcc App', () => {
  let page: HccPage;

  beforeEach(() => {
    page = new HccPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hcc works!');
  });
});
