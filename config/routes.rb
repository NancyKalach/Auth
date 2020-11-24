Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :tops, only: [:show, :index]

    resources :items, only: [:index, :show]
    resources :favorites, only: [:create, :index, :destroy]
    resources :carts, only: [:create, :index]

  end
  
  root "static_pages#root"
end
