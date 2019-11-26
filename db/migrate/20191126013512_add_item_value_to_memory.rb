class AddItemValueToMemory < ActiveRecord::Migration[5.2]
  def change
    add_column :memories, :item_value, :string
    add_column :displays, :item_value, :string
    add_column :hdds, :item_value, :string
    add_column :ssds, :item_value, :string
    add_column :powers, :item_value, :string
    add_column :videocards, :item_value, :string
    add_column :cpucoolers, :item_value, :string
    add_column :pccases, :item_value, :string

    add_column :memories, :image, :string
    add_column :displays, :image, :string
    add_column :hdds, :image, :string
    add_column :ssds, :image, :string
    add_column :powers, :image, :string
    add_column :videocards, :image, :string
    add_column :cpucoolers, :image, :string
    add_column :pccases, :image, :string

  end
end
