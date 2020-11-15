class Api::ItemsController < ApplicationController
    
    def index
        category = params[:category]
        @items = Item.where(" category = '#{category}' ")
    end

    
    def show
        @item = Item.find(params[:id])
    end
end
