class User < ApplicationRecord
    validates :first_name, :last_name, :age, :gender, presence: true
end
