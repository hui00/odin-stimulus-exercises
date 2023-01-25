# == Schema Information
#
# Table name: variants
#
#  id           :bigint           not null, primary key
#  fuel_type    :string
#  transmission :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  car_id       :bigint           not null
#
# Indexes
#
#  index_variants_on_car_id  (car_id)
#
# Foreign Keys
#
#  fk_rails_...  (car_id => cars.id)
#
class Variant < ApplicationRecord
  validates :fuel_type, presence: true, inclusion: {in: %w[petrol diesel electric]}
  validates :transmission, presence: true, inclusion: {in: %w[manual automatic]}

  belongs_to :car
end
