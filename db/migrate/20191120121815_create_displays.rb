class CreateDisplays < ActiveRecord::Migration[5.2]
  def change
    create_table :displays do |t|
      t.string :name
      t.string :brand
      t.string :size
      t.string :type
      t.string :area
      t.string :contrast
      t.timestamps
    end
  end
end
