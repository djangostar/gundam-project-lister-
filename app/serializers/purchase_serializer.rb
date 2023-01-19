class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :price
  belongs_to :user
  belongs_to :gundam
end
