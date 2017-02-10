import { Chapitre1Page } from './app.po';

describe('chapitre1 App', function() {
  let page: Chapitre1Page;

  beforeEach(() => {
    page = new Chapitre1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
