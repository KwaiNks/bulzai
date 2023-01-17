class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.integer :board_size
      t.integer :game_type

      t.timestamps
    end
  end
end
