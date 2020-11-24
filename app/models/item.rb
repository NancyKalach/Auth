class Item < ApplicationRecord
    validates :category, :price, :size, :description, :photo_url, presence: true
    validates :price, numericality: true

    def optionsArray
        a = []
        self.options.each do |option|
            a.push(ActionController::Base.helpers.asset_path("items/#{option}"))
        end
        return a 
    end

end
