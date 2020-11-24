class Api::CartsController < ApplicationController
    
    def create
        @cart = Cart.new(cart_params)
        if @cart.save
            render :show
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end

    def index
        @carts = Cart.where(" user_id = '#{current_user.id}' ")
    end
    
    private

    def cart_params
        params.require(:cart).permit(:user_id, :item_id)
    end
end
