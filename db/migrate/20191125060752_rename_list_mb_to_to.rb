class RenameListMbToTo < ActiveRecord::Migration[5.2]
  def change
    rename_table :mbs, :motherboards
  end
end
