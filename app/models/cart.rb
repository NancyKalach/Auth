class Cart < ApplicationRecord
    validates :user_id, :item_id, presence: true, numericality: true
    belongs_to :user 
end
