# Test the Reservation model
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  def setup
    @user = users(:example_user)  # Assume you have a user fixture
    @property = properties(:example_property)  # Assume you have a property fixture
    @reservation = Reservation.new(
      user: @user,
      property: @property,
      checkin_date: Date.tomorrow,
      checkout_date: Date.tomorrow + 3.days
    )
  end

  test "should be valid" do
    assert @reservation.valid?
  end

  test "checkin_date should be present" do
    @reservation.checkin_date = nil
    assert_not @reservation.valid?
  end

  test "checkout_date should be present" do
    @reservation.checkout_date = nil
    assert_not @reservation.valid?
  end

  test "upcoming_reservations scope" do
    @reservation.save
    assert_includes Reservation.upcoming_reservations, @reservation
  end

  test "current_reservations scope" do
    @reservation.checkin_date = Date.today - 1.day
    @reservation.checkout_date = Date.today + 1.day
    @reservation.save
    assert_includes Reservation.current_reservations, @reservation
  end
end
