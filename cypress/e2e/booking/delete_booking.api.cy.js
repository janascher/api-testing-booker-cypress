describe('API Restful-Booker', () => {
  const payload_create_booking = require('../../fixtures/create_booking_sucess.json');

  before('Create Token', () => {
    cy.createToken();
  });

  it('Delete Booking', () => {
    cy.createBooking(payload_create_booking).then((res_post) => {
      expect(res_post.status).to.eq(200);
      cy.setBookingId(res_post.body); // Extração do ID
    });

    cy.deleteBooking().then((res_delete) => {
      expect(res_delete.status).to.eq(201);
    });
  });
});
