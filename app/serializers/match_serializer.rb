class MatchSerializer < ActiveModel::Serializer
  attributes :id, :score, :x_coordinate, :y_coordinate, :total_score_per_match, :user_id, :game_id
end
