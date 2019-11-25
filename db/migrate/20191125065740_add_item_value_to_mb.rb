class AddItemValueToMb < ActiveRecord::Migration[5.2]
  def change
    add_column :mbs, :item_value, :string
  end
end
