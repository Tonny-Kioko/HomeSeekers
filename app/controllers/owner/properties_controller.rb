module Owner
  class PropertiesController < ApplicationController
    before_action :authenticate_user!
    before_action :set_property, only: [:edit, :update, :update_amenities, :remove_image, :add_images]


    def index
      @properties = current_user.properties
    end

    def new
      @property = Property.new
    end

    def create
      @property = current_user.properties.create!(property_params)
      redirect_to edit_owner_property_path, notice: 'Listing Added Successfully. Edit property to add Images'

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

    def remove_image
      image = @property.images.find(params[:image_id])
      if image.destroy!
        redirect_to edit_owner_property_path, notice: 'Property Image Deleted Successfully'
      else
        redirect_back fallback_location: edit_Owner_property_path, alert: 'Failed to Delete Image, Check again later'
      end
    end

    def add_images
      @property.images.attach(params[:property][:images])
      redirect_to edit_owner_property_path, notice: 'Property images uploaded'
    end

    def destroy
      @property.destroy
      redirect_to owner_properties_path, alert: "#{@property.name} deleted successfully."
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