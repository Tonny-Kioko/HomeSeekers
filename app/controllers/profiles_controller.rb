class ProfilesController < ApplicationController

  before_action :authenticate_user!
  before_action :set_profile, only: [:edit, :update]

  def edit
    @profile = current_user.profile
  end

  def update
    if @profile.update!(profile_params)
      redirect_to edit_profile_path, notice: 'Profile Updated Successfully'
    else
      redirect_back fallback_location: edit_profile_path, alert: 'Failed to update profile, Check again later'
    end
  end

  def set_profile
    @profile = current_user.profile
  end

  def profile_params
    params.require(:profile).permit{
      :name,
      :address_1,
      :address_2,
      :city,
      :state,
      :country,
    }
  end
end