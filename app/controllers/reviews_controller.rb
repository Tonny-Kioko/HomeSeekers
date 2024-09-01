class ReviewsContoller < ApplicationController
  before_action :authenticate_user!
  def new

    @reservation = Reservation.find(params[:reservation_id])
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      redirect_to root_path, notice: "Review Added Successfully"
    else
      redirect_back fallback_location: root_path, notice: "Review Add Failed"
    end
  end

  private
  def reviews_params
    params.permit(
      :user_id,
      :property_id,
      :content,
      :cleanliness_rating,
      :accuracy_rating,
      :checkin_rating,
      :communication_rating,
      :location_rating,
      :value_rating
    )
  end


end