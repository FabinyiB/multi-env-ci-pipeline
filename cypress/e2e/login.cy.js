describe('Hello app environment', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the hello world page', { tags: ['smoke'] }, () => {
    cy.contains('Hello World').should('be.visible');
    cy.contains(`Current environment: ${Cypress.env('environmentName')}`).should('be.visible');
  });

  it('keeps the environment label when reloaded', { tags: ['regression'] }, () => {
    cy.reload();
    cy.get('#env-label').should('contain.text', Cypress.env('environmentName'));
  });
});
