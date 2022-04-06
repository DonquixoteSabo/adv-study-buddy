const addExam = () => {
  cy.get('[for="subject"]').click().type('Computer Science');
  cy.get('[for="hour"]').click().type('12:30');
  cy.get('[for="description"]').click().type('Access Databases');
  cy.contains('Confirm').click();
};

describe('Exams', () => {
  beforeEach(() => {
    cy.viewport(980, 850);
    cy.visit('/exams/');
  });

  it('handles adding and removing items', () => {
    addExam();
    cy.contains('Computer Science');
    cy.get('[data-cy="delete Computer Science"]').click().should('not.exist');
  });

  it('opens modal and remove item from there', () => {
    addExam();
    cy.get('[data-cy="open Computer Science"]').click();
    cy.contains('Access Databases');
    cy.get('[data-cy="delete Computer Science from modal')
      .click()
      .should('not.exist');
  });
});

export {};
