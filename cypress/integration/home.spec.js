context('Home', () => {
  it('renders text', () => {
    cy.visit('/');
    cy.contains('Welcome to testing-nextjs');
  });

  it('includes Strict-Transport-Security', () => {
    cy.request('/').then((resp) => {
      const hsts = resp.headers['strict-transport-security'];
      expect(hsts).to.be.a('string');
      expect(hsts).to.include('includeSubDomains');
      expect(hsts).to.include('max-age=');
    });
  });
});
