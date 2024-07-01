class AddReviewsCountToProperties < ActiveRecord::Migration[7.1]
  def change
    add_column :properties, :reviews_count, :integer
  end
end
