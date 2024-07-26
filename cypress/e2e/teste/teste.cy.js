/// <reference types="cypress" />

describe('teste', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    // -TESTE ADIÇÃO

    it('should add a contact from the list correctly', () => {
        cy.get('[type="text"]').type('kauã') //preenche o nome
        cy.get('[type="email"]').type('kauatorresfranca2@gmail.com') //preenche o email
        cy.get('[type="tel"]').type('82 99612-4145') //preenche o numero
        cy.get('.adicionar').click() //clica no botão
        cy.screenshot("teste-adição"); // criando um screenshot da edição
    })

    // -TESTE EDIÇÃO

    it('should edit a contact from the list correctly', () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click(); // Clicar no botão de editar do segundo item da lista
        cy.get('input[type="text"]').clear().type("Marcelo Souza"); // Limpar e preencher o campo de nome
        cy.get('input[type="email"]').clear().type("mmarcelo@ebac.com.br"); // Limpar e Preencher o campo de e-mail
        cy.get('input[type="tel"]').clear().type("11912345678"); // Limpar e Preencher o campo de telefone
        cy.get(".alterar").click(); // Clicar no botão de salvar (ou qualquer botão que finalize a edição)
        cy.screenshot("teste-editar"); // criando um screenshot da edição
    })
    
    // - TESTE DE REMOÇÃO

    it('should remove a contact from the list correctly', () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .delete").click(); // Clicar no botão de remover o contato da lista
        cy.screenshot("teste-remover"); // criando um screenshot da Deletar
    })
    
})