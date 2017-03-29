import { SimpleCrudPage } from './app.po';

describe('simple-crud App', () => {
  let page: SimpleCrudPage;

  beforeEach(() => {
    page = new SimpleCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
