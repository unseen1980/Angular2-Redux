import { PaxReduxAngular2Page } from './app.po';

describe('pax-redux-angular2 App', function() {
  let page: PaxReduxAngular2Page;

  beforeEach(() => {
    page = new PaxReduxAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
