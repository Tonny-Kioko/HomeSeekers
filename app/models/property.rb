# Validates the property model for all its entries

class Property < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 50 }
  validates :headline, presence: true, length: { maximum: 50 }
  validates :description, presence: true, length: { maximum: 500 }
  validates :address_1, presence: true, length: { maximum: 50 }
  validates :city, presence: true, length: { maximum: 50 }
  validates :state, presence: true, length: { maximum: 50 }
  validates :country, presence: true, length: { maximum: 50 }

  monetize :price_cents, allow_nil: true

  has_many_attached :images

  has_many :reviews, dependent: :destroy
  has_many :wishlists, dependent: :destroy
  has_many :wishlisted_users, through: :wishlist, source: :user, dependent: :destroy

  def update_average_rating
    average_rating = reviews.average(:final_rating);
    update_column(:average_final_rating, average_rating)
  end
end