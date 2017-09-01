class AddMatchToCrushes < ActiveRecord::Migration[5.1]
  def change
    add_column :crushes, :match_id, :integer
  end
end
