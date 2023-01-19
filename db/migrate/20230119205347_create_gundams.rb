class CreateGundams < ActiveRecord::Migration[6.1]
  def change
    create_table :gundams do |t|
      t.string :name
      t.string :model_series
      t.string :grade
      t.integer :year
      t.string :img_url

      t.timestamps
    end
  end
end
