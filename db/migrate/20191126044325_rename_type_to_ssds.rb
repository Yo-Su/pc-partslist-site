class RenameTypeToSsds < ActiveRecord::Migration[5.2]
  def change
    rename_column :ssds, :type, :ssdtype
  end
end
