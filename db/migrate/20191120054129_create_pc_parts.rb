class CreatePcParts < ActiveRecord::Migration[5.2]
  def change
    create_table :pc_parts do |t|
      t.string :category
      t.timestamps
    end
  end
end
