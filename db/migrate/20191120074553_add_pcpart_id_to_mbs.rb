class AddPcpartIdToMbs < ActiveRecord::Migration[5.2]
  def change
    add_column :mbs, :pcpart_id, :integer
  end
end
