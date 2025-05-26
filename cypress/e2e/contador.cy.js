describe('Teste do Contador', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Deve exibir o valor inicial como 0', () => {
      cy.contains('Valor atual: 0');
    });
  
    it('Deve incrementar o contador', () => {
      cy.contains('Incrementar').click();
      cy.contains('Valor atual: 1');
    });
  
    it('Deve decrementar o contador', () => {
      cy.contains('Decrementar').click();
      cy.contains('Valor atual: -1');
    });
  
    it('Teste quebrando propositalmente', () => {
      cy.contains('Valor atual: 999');
    });
  });
  