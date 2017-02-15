import { TravisSamplePage } from './app.po';

describe('travis-sample App', function() {
  let page: TravisSamplePage;

  beforeEach(() => {
    page = new TravisSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
