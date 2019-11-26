class AddPcpartIdToMemory < ActiveRecord::Migration[5.2]
  def change
    add_column :memories,   :pcpart_id, :integer, after: :updated_at
    add_column :displays,   :pcpart_id, :integer, after: :updated_at
    add_column :hdds,       :pcpart_id, :integer, after: :updated_at
    add_column :ssds,       :pcpart_id, :integer, after: :updated_at
    add_column :powers,     :pcpart_id, :integer, after: :updated_at
    add_column :videocards, :pcpart_id, :integer, after: :updated_at
    add_column :cpucoolers, :pcpart_id, :integer, after: :updated_at
    add_column :pccases,    :pcpart_id, :integer, after: :updated_at
  end
end
