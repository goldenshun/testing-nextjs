describe('Robots.txt', () => {
  it('disallows all robots', () => {
    cy.request('/robots.txt')
      .its('body').should('eq', 'User-agent: *\nDisallow: /');
  });
});
