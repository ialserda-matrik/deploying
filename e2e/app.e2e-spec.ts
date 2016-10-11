import { DeployingPage } from './app.po';

describe('deploying App', function() {
  let page: DeployingPage;

  beforeEach(() => {
    page = new DeployingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
