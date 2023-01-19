class User < ApplicationRecord
  has_many :purchases
  has_many :gundams, through: :purchases
end
