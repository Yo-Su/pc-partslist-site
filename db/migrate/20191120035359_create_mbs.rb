class CreateMbs < ActiveRecord::Migration[5.2]
  def change
    create_table :mbs do |t|
      t.string :name
      t.string :brand
      t.string :chipset
      t.string :formfactor
      t.string :socket
      t.timestamps
    end
  end
end
