class PropertiesController < ApplicationController
  def show
    @property = Property.includes(:reviews).find_by(id: params[:id])

    if @property
      @reviews = @property.reviews
      @amenities = @property.amenities
      @overall_rating_counts = @property.reviews.group('ROUND(final_rating)').count.transform_keys(&:to_i)
      @overall_rating_counts.default = 0

      upcoming_reservations = @property.reservations.upcoming_reservations
      if upcoming_reservations.exists?
        @blocked_dates = upcoming_reservations.pluck(:checkin_date, :checkout_date).map { |reservation| [reservation[0].to_s, reservation[1].to_s] }
      else
        @blocked_dates = []
      end
    else
      flash[:alert] = "Property not found."
      redirect_to root_path
    end
  end
end
