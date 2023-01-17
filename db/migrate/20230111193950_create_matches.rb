class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|
      t.integer :score
      t.integer :x_coordinate
      t.integer :y_coordinate
      t.integer :total_score_per_match
      t.integer :user_id
      t.integer :game_id

      t.timestamps
    end
  end
end
