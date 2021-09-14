const shortTimeout = 2000;

describe ('Search user', () => {
  it ('should search for a user and show a list of users', () => {
    cy.visit ('localhost:5000');
    cy.wait (shortTimeout);
    cy.get ('input').type ('SamWyld{enter}');
    cy.wait (shortTimeout);
    cy.get ('a[href="/user/SamWyld"]').click ();
    cy.wait (shortTimeout);
    cy.get ('div[class="repo-container"]').then (x => {
      expect (x.length).to.equal (5);
    });
    cy.get ('h3').invoke ('text').then (text => {
      expect (text).to.equal ('SamWyld');
    });
  });
});
