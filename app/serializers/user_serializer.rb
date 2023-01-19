class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :purchases
  has_many :gundams, through: :purchases
end
