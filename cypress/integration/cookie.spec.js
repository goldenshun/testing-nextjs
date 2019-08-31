/* eslint-disable no-unused-expressions */
context('Cookie', () => {
  it('sets the cookie with secure attributes', () => {
    cy.visit('/cookie');
    cy.getCookie('TOKEN').then((cookie) => {
      expect(cookie.httpOnly).to.be.true;
    });
  });
});
