# == Schema Information
#
# Table name: cars
#
#  id         :bigint           not null, primary key
#  color      :string
#  model      :string
#  year       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Car < ApplicationRecord
  validates :model, presence: true
  validates :year, presence: true, numericality: {only_integer: true, greater_than: 1900, less_than: 2021}

  has_many :variants, dependent: :destroy
  accepts_nested_attributes_for :variants, allow_destroy: true
end
