class AddDefaultValueToAverageFinalRatingInProperties < ActiveRecord::Migration[7.1]
  def change
    change_column :properties, :average_final_rating, :decimal, default: 0
    #Ex:- :default =>''
  end
end
