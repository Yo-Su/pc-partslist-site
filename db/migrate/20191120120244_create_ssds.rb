class CreateSsds < ActiveRecord::Migration[5.2]
  def change
    create_table :ssds do |t|
      t.string :name
      t.string :brand
      t.string :capacity
      t.string :size
      t.string :interface
      t.string :type
      t.timestamps
    end
  end
end
