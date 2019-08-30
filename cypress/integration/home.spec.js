context('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders text', () => {
    cy.contains('Welcome to testing-nextjs');
  });
});
