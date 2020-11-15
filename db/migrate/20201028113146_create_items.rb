class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :category, null: false
      t.integer :price, null: false
      t.string :size, null: false
      t.string :description, null: false
      t.string :photo_url, null: false

      t.timestamps
    end
  end
end
