class CreateBenches < ActiveRecord::Migration
  def change
    create_table :benches do |t|
      t.float :lat
      t.float :lng
      t.string :description

      t.timestamps null: false
    end
  end
end
