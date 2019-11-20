class CreatePccases < ActiveRecord::Migration[5.2]
  def change
    create_table :pccases do |t|
      t.string :name
      t.string :brand
      t.string :factor
      t.string :size
      t.timestamps
    end
  end
end
