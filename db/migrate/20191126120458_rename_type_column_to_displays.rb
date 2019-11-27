class RenameTypeColumnToDisplays < ActiveRecord::Migration[5.2]
  def change
    rename_column :displays, :type, :monitortype
  end
end
