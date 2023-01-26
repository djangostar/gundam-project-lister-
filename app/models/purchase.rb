class Purchase < ApplicationRecord
  validates :price, :gundam_id, presence: :true
  belongs_to :user
  belongs_to :gundam
end
