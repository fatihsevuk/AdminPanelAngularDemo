import { LayoutComponentsDemoPage } from './app.po';

describe('layout-components-demo App', () => {
  let page: LayoutComponentsDemoPage;

  beforeEach(() => {
    page = new LayoutComponentsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
