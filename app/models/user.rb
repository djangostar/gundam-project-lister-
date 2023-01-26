class User < ApplicationRecord

  # cattr_accesor :current_user
  has_secure_password
  validates :username, uniqueness: true, presence: true
  validates :password, :password_confirmation, confirmation: true
  has_many :purchases
  has_many :gundams, through: :purchases
end
