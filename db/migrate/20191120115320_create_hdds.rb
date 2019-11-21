class CreateHdds < ActiveRecord::Migration[5.2]
  def change
    create_table :hdds do |t|
      t.string :name
      t.string :brand
      t.string :series
      t.string :capacity
      t.string :speed
      t.string :interface1
      t.string :interface2
      t.string :cache
      t.timestamps
    end
  end
end
