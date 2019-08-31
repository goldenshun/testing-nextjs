/* eslint-disable no-unused-expressions */
context('Broken SSR', () => {
  it('renders text', () => {
    cy.visit('/broken-ssr');
    cy.contains('The path is /broken-ssr');
  });

  it('renders text on the server', () => {
    cy.request('/broken-ssr').then((resp) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(resp.body, 'text/html');
      const content = doc.querySelector('div[data-testid="content"]');
      expect(content).to.exist;
      expect(content.innerText).to.eq('The path is /broken-ssr');
    });
  });
});
