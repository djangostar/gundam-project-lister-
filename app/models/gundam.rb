class Gundam < ApplicationRecord
  has_many :purchases
  has_many :users, through: :purchases
  # accepts_nested_attributes_for :purchases
end
