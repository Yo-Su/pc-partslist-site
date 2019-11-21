class CreatePowers < ActiveRecord::Migration[5.2]
  def change
    create_table :powers do |t|
      t.string :name
      t.string :brand
      t.string :standard
      t.string :capacity
      t.string :plus
      t.timestamps
    end
  end
end
