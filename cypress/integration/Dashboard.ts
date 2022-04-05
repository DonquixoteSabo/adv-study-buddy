describe('Dashboard', () => {
  it('redirects to default group', () => {
    cy.viewport(980, 800);
    cy.visit('http://localhost:3000/');

    cy.contains('Group A');
  });
});

export {};
