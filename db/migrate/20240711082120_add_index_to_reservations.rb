class AddIndexToReservations < ActiveRecord::Migration[7.1]
  def change
    add_index :reservations, [:user_id, :property_id, :checkin_date, :checkout_date], :unique => true
  end
end
