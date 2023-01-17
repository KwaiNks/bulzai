class User < ApplicationRecord
    has_secure_password

    has_many :matches
    has_many :games, through: :matches

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }
    
end
