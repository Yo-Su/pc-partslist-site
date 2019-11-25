class AddImageToCpu < ActiveRecord::Migration[5.2]
  def change
    add_column :cpus, :image, :string
    add_column :mbs, :image, :string
  end
end
