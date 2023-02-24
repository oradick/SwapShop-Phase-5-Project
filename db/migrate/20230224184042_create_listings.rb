class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.integer :creator_id
      t.integer :recipient_id
      t.string :image
      t.string :description
      t.string :size
      t.string :keywords
      t.boolean :offer

      t.timestamps
    end
  end
end
