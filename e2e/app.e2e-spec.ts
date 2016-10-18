import { Mypro3Page } from './app.po';

describe('mypro3 App', function() {
  let page: Mypro3Page;

  beforeEach(() => {
    page = new Mypro3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
