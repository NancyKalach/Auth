class Api::TopsController < ApplicationController
    
    def index
        @tops = Top.all
    end

    def show
        @top = Top.find(params[:id])
    end
end
