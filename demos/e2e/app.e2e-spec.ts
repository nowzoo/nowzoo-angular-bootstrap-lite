import { A4b4Page } from './app.po';

describe('a4b4 App', () => {
  let page: A4b4Page;

  beforeEach(() => {
    page = new A4b4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
