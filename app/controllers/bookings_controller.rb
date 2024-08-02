class BookingsController < ApplicationController
  def new
    @checkin_date = params[:checkin_date]
    @checkout_date = params[:checkout_date]
    @total_nights = numberOfNights()
    @property = Property.find(params[:property_id])

    @base_fare = (@property.price * @total_nights)
    @service_fee = (@base_fare * 0.18)
    @total_amount = @base_fare + @service_fee
  end

  private

  def numberOfNights
    checkin_date = Date.parse(params[:checkin_date])
    checkout_date = Date.parse(params[:checkout_date])
    (checkout_date - checkin_date).to_i
  end
  def booking_params
    params.permit(:checkin_date, :checkout_date, :property_id)
  end
end