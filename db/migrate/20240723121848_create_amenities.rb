class CreateAmenities < ActiveRecord::Migration[7.1]
  def change
    create_table :amenities do |t|
      t.string :name
      t.string :description

      t.timestamps
    end

    add_index :amenities, :name, unique: true
  end
end
