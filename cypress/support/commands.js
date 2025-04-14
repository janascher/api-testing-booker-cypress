// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('createToken', () => {
  const login = require('../fixtures/login.json');
  cy.request({
    method: 'POST',
    url: '/auth',
    body: login,
    failOnStatusCode: false, // não falhar automaticamente em status diferentes de 2xx ou 3xx
  }).then(({ status, body }) => {
    expect(status).to.eq(200);
    Cypress.env('token', body.token);
  });
});

Cypress.Commands.add('setBookingId', (payload) => {
  Cypress.env('bookingid', payload.bookingid);
});

Cypress.Commands.add('createBooking', (payload) => {
  cy.request({
    method: 'POST',
    url: '/booking',
    body: payload,
    failOnStatusCode: false, // não falhar automaticamente em status diferentes de 2xx ou 3xx
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add('partialUpdateBooking', (payload) => {
  cy.request({
    method: 'PATCH',
    url: `/booking/${Cypress.env('bookingid')}`,
    body: payload,
    headers: {
      'Content-Type': 'application/json',
      Cookie: `token=${Cypress.env('token')}`,
    },
    failOnStatusCode: false, // não falhar automaticamente em status diferentes de 2xx ou 3xx
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add('deleteBooking', () => {
  cy.request({
    method: 'DELETE',
    url: `/booking/${Cypress.env('bookingid')}`,
    failOnStatusCode: false, // não falhar automaticamente em status diferentes de 2xx ou 3xx
    headers: {
      Cookie: `token=${Cypress.env('token')}`,
    },
  }).then((response) => {
    return response;
  });
});
