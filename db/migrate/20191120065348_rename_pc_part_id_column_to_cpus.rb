class RenamePcPartIdColumnToCpus < ActiveRecord::Migration[5.2]
  def change
    add_column :cpus, :pcpart_id, :integer
  end
end
