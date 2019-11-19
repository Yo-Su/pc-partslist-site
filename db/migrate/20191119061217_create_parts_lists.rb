class CreatePartsLists < ActiveRecord::Migration[5.2]
  def change
    create_table :parts_lists do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.boolean :public_private, null: false
      t.integer :cpu_id
      t.integer :mb_id
      t.timestamps
    end
  end
end
