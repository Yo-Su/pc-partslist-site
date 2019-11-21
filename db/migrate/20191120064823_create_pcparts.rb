class CreatePcparts < ActiveRecord::Migration[5.2]
  def change
    create_table :pcparts do |t|
      t.string :category
      t.timestamps
    end
  end
end
