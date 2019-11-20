class CreateMemories < ActiveRecord::Migration[5.2]
  def change
    create_table :memories do |t|
      t.string :name
      t.string :brand
      t.string :capacity
      t.string :setnumber
      t.string :standard
      t.string :interface
      t.timestamps
    end
  end
end
