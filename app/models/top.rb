class Top < ApplicationRecord
    validates :price, :size, :description, :photo_url, presence: true
    validates :price, numericality: true
end
