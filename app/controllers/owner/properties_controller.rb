module Owner
  class PropertiesController < ApplicationController
    before_action :authenticate_user!
    before_action :set_property, only: [:edit, :update, :update_amenities]


    def index
      @properties = current_user.properties
    end

    def update
      if @property.update!(property_params)
        redirect_to edit_owner_property_path, notice: 'Property Details Updated Successfully'
      else
        redirect_back fallback_location: edit_Owner_property_path, alert: 'Failed to update property, Check again later'
      end
    end

    def update_amenities
      if @property.update!(amenities_params)
        redirect_to edit_owner_property_path, notice: 'Amenities Details Updated Successfully'
      else
        redirect_back fallback_location: edit_Owner_property_path, alert: 'Failed to Update Amenities, Check again later'
      end
    end

    private

    def set_property
      @property = current_user.properties.find(params[:id])
    end

    def amenities_params
      params.require(:property).permit(emenity_ids)
    end

    def property_params
    params.require(:property).permit(
      :name,
      :price,
      :headline,
      :description,
      :address_1,
      :address_2,
      :city,
      :state,
      :country
    )
    end


  end

end