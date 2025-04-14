describe('API Restful-Booker', () => {
  const payload_create_booking = require('../../fixtures/create_booking_sucess.json');

  before('Create Token', () => {
    cy.createToken();
  });

  it('Create Booking', () => {
    cy.createBooking(payload_create_booking).then((res_post) => {
      expect(res_post.status).to.eq(200);
      expect(res_post.body).not.empty;
      cy.setBookingId(res_post.body); // Extração do ID
      expect(res_post.body.booking.firstname).to.eq(payload_create_booking.firstname);
      expect(res_post.body.booking.lastname).to.eq(payload_create_booking.lastname);
      expect(res_post.body.booking.totalprice).to.eq(payload_create_booking.totalprice);
      expect(res_post.body.booking.depositpaid).to.eq(payload_create_booking.depositpaid);
      expect(res_post.body.booking.bookingdates.checkin).to.eq(
        payload_create_booking.bookingdates.checkin
      );
      expect(res_post.body.booking.bookingdates.checkout).to.eq(
        payload_create_booking.bookingdates.checkout
      );
      expect(res_post.body.booking.additionalneeds).to.eq(payload_create_booking.additionalneeds);
    });

    cy.deleteBooking().then((res_delete) => {
      expect(res_delete.status).to.eq(201);
    });
  });
});
