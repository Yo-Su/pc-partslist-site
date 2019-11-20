class CreateVideocards < ActiveRecord::Migration[5.2]
  def change
    create_table :videocards do |t|
      t.string :name
      t.string :brand
      t.string :chip
      t.string :core
      t.string :memory
      t.string :clock
      t.string :interface
      t.timestamps
    end
  end
end
