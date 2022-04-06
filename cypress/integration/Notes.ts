describe('Notes', () => {
  it('adds and deletes note', () => {
    cy.viewport(980, 800);
    cy.visit('/notes/');

    cy.contains('Title').click().type('My first note');
    cy.contains('Content').click().type('My description');

    cy.contains('Add').click();

    cy.get('[data-cy="My first note"]').click().should('not.exist');
  });
});

export {};
