class AddSeatingToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :num_seats, :integer
  end
end
