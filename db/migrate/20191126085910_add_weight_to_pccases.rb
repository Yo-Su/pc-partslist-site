class AddWeightToPccases < ActiveRecord::Migration[5.2]
  def change
    add_column :pccases, :weight, :string, after: :factor
    rename_column :pccases, :size, :size_wdh
  end
end
