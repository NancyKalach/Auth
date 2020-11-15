class Item < ApplicationRecord
    validates :category, :price, :size, :description, :photo_url, presence: true
    validates :price, numericality: true
end
