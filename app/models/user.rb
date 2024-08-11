class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  validates :name, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 50 }
  validates :address_1, presence: true, length: { maximum: 500 }
  validates :address_2, presence: true, length: { maximum: 500 }
  validates :city, presence: true, length: { maximum: 500 }
  validates :state, presence: true, length: { maximum: 500 }
  validates :country, presence: true, length: { maximum: 500 }

  has_one_attached :picture

  has_many :wishlists, dependent: :destroy
  has_many :wishlisted_properties, through: :wishlists, source: :property, dependent: :destroy
  has_many :reservations, dependent: :destroy
  has_many :reserved_properties, through: :reservations, source: :property, dependent: :destroy
    has_many :payments, through: :reservations, dependent: :destroy

end
