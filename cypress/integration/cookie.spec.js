/* eslint-disable no-unused-expressions */
context('Cookie', () => {
  it('sets the cookie with secure attributes', () => {
    cy.visit('/cookie');
    cy.getCookie('TOKEN').then((cookie) => {
      expect(cookie).to.exist;
      expect(cookie.httpOnly).to.be.true;

      if (!cookie.domain.includes('localhost')) {
        expect(cookie.secure.to.be.true);
      }
    });
  });
});
