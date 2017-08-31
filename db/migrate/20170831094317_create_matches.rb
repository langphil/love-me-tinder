class CreateMatches < ActiveRecord::Migration[5.1]
  def change
    create_table :matches do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.text :profile_pic

      t.timestamps
    end
  end
end
