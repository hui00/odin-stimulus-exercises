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
require "test_helper"

class VariantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
