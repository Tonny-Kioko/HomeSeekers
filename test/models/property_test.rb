# Test the available_dates method
require 'test_helper'

class PropertyTest < ActiveSupport::TestCase
  def setup
    @property = properties(:example_property)  # Assume you have a property fixture
  end

  test "should return available dates when no reservations" do
    assert_equal Date.tomorrow..(Date.tomorrow + 30.days), @property.available_dates
  end

  test "should return available dates when no current reservations" do
    next_reservation = reservations(:upcoming_reservation)  # Assume you have a reservation fixture
    @property.reservations << next_reservation
    assert_equal Date.tomorrow..next_reservation.checkin_date, @property.available_dates
  end

  test "should return available dates when no upcoming reservations" do
    current_reservation = reservations(:current_reservation)  # Assume you have a reservation fixture
    @property.reservations << current_reservation
    assert_equal current_reservation.checkout_date..(Date.tomorrow + 30.days), @property.available_dates
  end

  test "should return available dates between current and next reservation" do
    current_reservation = reservations(:current_reservation)  # Assume you have a reservation fixture
    next_reservation = reservations(:upcoming_reservation)  # Assume you have a reservation fixture
    @property.reservations << current_reservation
    @property.reservations << next_reservation
    assert_equal current_reservation.checkout_date..next_reservation.checkin_date, @property.available_dates
  end
end

