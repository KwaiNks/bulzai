class GameSerializer < ActiveModel::Serializer
  attributes :id, :board_size, :game_type
end
