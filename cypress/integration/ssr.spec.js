/* eslint-disable no-unused-expressions */
context('SSR', () => {
  it('/ssr renders text', () => {
    cy.visit('/ssr');
    cy.contains('The path is /ssr');
  });

  it('/ssr renders text on the server', () => {
    cy.request('/ssr').then((resp) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(resp.body, 'text/html');
      const content = doc.querySelector('div[data-testid="content"]');
      expect(content).to.not.be.null;
      expect(content.innerText).to.eq('The path is /ssr');
    });
  });

  it('/broken-ssr renders text', () => {
    cy.visit('/broken-ssr');
    cy.contains('The path is /broken-ssr');
  });

  it('/broken-ssr renders text on the server', () => {
    cy.request('/broken-ssr').then((resp) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(resp.body, 'text/html');
      const content = doc.querySelector('div[data-testid="content"]');
      expect(content).to.not.be.null;
      expect(content.innerText).to.eq('The path is /broken-ssr');
    });
  });
});
