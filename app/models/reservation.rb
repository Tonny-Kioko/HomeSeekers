class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :property

  has_one :payment, class_name: "payment", foreign_key: "payment_id"

  validates :checkin_date, presence: true
  validates :checkout_date, presence: true

  scope :upcoming_reservations, -> { where("checkin_date > ?", Date.today).order(:checkin_date) }
  scope :current_reservations, -> { where("checkout_date > ? AND checkin_date < ?", Date.today, Date.today).order(:checkout_date) }

  # Ex:- scope :active, -> { where(active: true) }
end
