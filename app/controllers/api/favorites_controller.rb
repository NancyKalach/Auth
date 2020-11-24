class Api::FavoritesController < ApplicationController

    def create
        @favorite = Favorite.new(favorite_params)
        if @favorite.save
            render "api/favorites/show"
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def index
        @favorites = Favorite.where(" user_id = '#{current_user.id}' ")
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy

        render :index
    end

    private

    def favorite_params
        params.require(:favorite).permit(:user_id, :item_id)
    end

end
