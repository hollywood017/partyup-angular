import { PartyUpPage } from './app.po';

describe('party-up App', () => {
  let page: PartyUpPage;

  beforeEach(() => {
    page = new PartyUpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
