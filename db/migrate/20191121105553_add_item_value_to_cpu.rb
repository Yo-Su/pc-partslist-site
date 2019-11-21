class AddItemValueToCpu < ActiveRecord::Migration[5.2]
  def change
    add_column :cpus, :item_value, :string
  end
end
