class ChangeReservationNullInReviews < ActiveRecord::Migration[7.1]

  def change
    change_column_null :reviews, :reservation_id, false
  end
end
