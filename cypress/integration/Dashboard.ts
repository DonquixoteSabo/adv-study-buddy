describe('Dashboard', () => {
  it('redirects to default group', () => {
    cy.viewport(980, 800);
    cy.visit('/');

    cy.contains('Group A');
  });
});

export {};
