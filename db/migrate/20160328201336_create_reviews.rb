class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.references :bench, index: true, foreign_key: true
      t.integer :rating, null: false
      t.text :body

      t.timestamps null: false
    end
  end
end
