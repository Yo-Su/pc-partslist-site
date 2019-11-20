class CreateCpucoolers < ActiveRecord::Migration[5.2]
  def change
    create_table :cpucoolers do |t|
      t.string :name
      t.string :brand
      t.string :intel
      t.string :amd
      t.string :type
      t.string :noise
      t.timestamps
    end
  end
end
