class CreateCpus < ActiveRecord::Migration[5.2]
  def change
    create_table :cpus do |t|
      t.string :name
      t.string :brand
      t.string :processor
      t.string :socket
      t.timestamps
    end
  end
end
