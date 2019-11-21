class RenamePcPartIdColumnToCpus < ActiveRecord::Migration[5.2]
  def change
    rename_column :cpus, :pc_part_id, :pcpart_id
  end
end
