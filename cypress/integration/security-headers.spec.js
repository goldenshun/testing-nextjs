context('Security Headers', () => {
  it('Should have a Strict-Transport-Security header', () => {
    cy.request('/').then((resp) => {
      const hsts = resp.headers['strict-transport-security'];
      expect(hsts).to.include('includeSubDomains');
      expect(hsts).to.include('max-age=');
    });
  });

  it('Should have X-Frame-Options set to deny', () => {
    cy.request('/').then((resp) => {
      const frameOptions = resp.headers['x-frame-options'];
      expect(frameOptions).to.equal('DENY');
    });
  });
});
