module Api 
  class WishlistController < ApplicationController
    protect_from_forgery with: :null_session
    # The wishlist tabble only ahs userId and PropertyId, abd the only operatons we need is create and delete    
    def create 
      wishlist = Wishlist.create!(wishlist_params)

      respond_to do |format|
        format.json do
          render json: wishlist.to_json, status: :ok
        end
      end
    end

    def destroy
      wishlist = Wishlist.find(params[:id])
      wishlist.destroy

      respond_to do |format|
        format.json do
          render status: 204
        end
      end
    end

    private

    def wishlist_params
      params.permit(:user_id, :property_id)
    end
  end
end