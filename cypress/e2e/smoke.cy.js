describe('Simple hello app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the hello page', { tags: ['smoke'] }, () => {
    cy.contains('Hello World').should('be.visible');
    cy.get('#env-label').should('contain.text', 'Current environment:');
  });

  it('still shows the environment label after reload', { tags: ['regression'] }, () => {
    cy.reload();
    cy.get('#env-label').should('contain.text', 'Current environment:');
  });
});
