class AddOptionsToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :options, :string, array: true, default: []
  end
end
