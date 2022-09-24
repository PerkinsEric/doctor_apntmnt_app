class User < ApplicationRecord
    validates :first_name, :last_name, :age, :gender, :phone_number, presence: true
end
