class GundamSerializer < ActiveModel::Serializer
  attributes :id, :name, :model_series, :grade, :year, :img_url, :purchases
  has_many :purchases
end
