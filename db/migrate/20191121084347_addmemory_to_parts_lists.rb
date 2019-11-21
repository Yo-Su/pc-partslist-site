class AddmemoryToPartsLists < ActiveRecord::Migration[5.2]
  def change
    add_column :parts_lists, :memory_id,      :integer, after: :mb_id
    add_column :parts_lists, :hdd_id,         :integer, after: :memory_id
    add_column :parts_lists, :ssd_id,         :integer, after: :hdd_id
    add_column :parts_lists, :videocard_id,   :integer, after: :ssd_id
    add_column :parts_lists, :powersupply_id, :integer, after: :videocard_id
    add_column :parts_lists, :pccase_id,      :integer, after: :powersupply_id
    add_column :parts_lists, :cpucooler_id,   :integer, after: :pccase_id
    add_column :parts_lists, :display_id,     :integer, after: :cpucooler_id
  end
end
