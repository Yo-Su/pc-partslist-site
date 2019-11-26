class RenamePowersupplyIdColumnToPartsLists < ActiveRecord::Migration[5.2]
  def change
    rename_column :parts_lists, :powersupply_id, :power_id
  end
end
