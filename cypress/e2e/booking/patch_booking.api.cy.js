describe('API Restful-Booker', () => {
  const payload_create_booking = require('../../fixtures/create_booking_sucess.json');
  const payload_update_booking = require('../../fixtures/update_booking_sucess.json');

  before('Create Token', () => {
    cy.createToken();
  });

  it('Partial Update Booking', () => {
    cy.createBooking(payload_create_booking).then((res_post) => {
      expect(res_post.status).to.eq(200);
      cy.setBookingId(res_post.body); // Extração do ID
    });

    cy.partialUpdateBooking(payload_update_booking).then((res_patch) => {
      expect(res_patch.status).to.eq(200);
      expect(res_patch.body).not.empty;
      expect(res_patch.body.firstname).to.eq(payload_update_booking.firstname);
      expect(res_patch.body.lastname).to.eq(payload_update_booking.lastname);
      expect(res_patch.body.totalprice).to.eq(payload_create_booking.totalprice);
      expect(res_patch.body.depositpaid).to.eq(payload_create_booking.depositpaid);
      expect(res_patch.body.bookingdates.checkin).to.eq(
        payload_create_booking.bookingdates.checkin
      );
      expect(res_patch.body.bookingdates.checkout).to.eq(
        payload_create_booking.bookingdates.checkout
      );
      expect(res_patch.body.additionalneeds).to.eq(payload_create_booking.additionalneeds);
    });

    cy.deleteBooking().then((res_delete) => {
      expect(res_delete.status).to.eq(201);
    });
  });
});
