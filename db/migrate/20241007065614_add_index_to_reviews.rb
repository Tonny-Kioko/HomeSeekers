class AddIndexToReviews < ActiveRecord::Migration[7.1]
  def change
    add_index :reviews, [:user_id, :property_id, :reservation_id], :unique => true
  end
end
