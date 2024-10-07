class AddDefaultValueToReviewsCountInProperties < ActiveRecord::Migration[7.1]
  def change
    change_column :properties, :reviews_count, :integer, default: 0
  end
end
