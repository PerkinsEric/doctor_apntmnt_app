class Doctor < ApplicationRecord
  validates :first_name, :last_name, :specialty, presence: true
end
