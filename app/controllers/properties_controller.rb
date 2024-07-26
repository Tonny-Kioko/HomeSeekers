class PropertiesController < ApplicationController
  def show
    @property = Property.includes(:reviews).find_by(id: params[:id])

    if @property
      @reviews = @property.reviews
      @amenities = @property.amenities
      @overall_rating_counts = @property.reviews.group('ROUND(final_rating)').count.transform_keys(&:to_i)
      @overall_rating_counts.default = 0
    else
      flash[:alert] = "Property not found."
      redirect_to properties_path
    end
  end
end

