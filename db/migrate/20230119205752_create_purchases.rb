class CreatePurchases < ActiveRecord::Migration[6.1]
  def change
    create_table :purchases do |t|
      t.integer :price
      t.integer :user_id
      t.integer :gundam_id

      t.timestamps
    end
  end
end
