class Payment < ApplicationRecord
  belongs_to :reservation

  monetize :base_fare, allow_nil: false
  monetize :service_fee, allow_nil: false
  monetize :total_amount, allow_nil: false
end
