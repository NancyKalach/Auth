class Api::ItemsController < ApplicationController
    
    def index
        if (params[:category])
            category = params[:category]
            @items = Item.where(" category = '#{category}' ")
        else 
            @items = Item.all
        end
    end

    
    def show
        @item = Item.find(params[:id])
    end

    
end
