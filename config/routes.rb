Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  resources :homes

  root to: "homes#index"

  namespace :api do
    resources :wishlist, only: [:create, :destroy]
  end

  resources :properties, only: [:show] do
    resources :bookings, only: [:new]
  end

  resources :booking_payments, only: [:create]

  get "booking_payments/success", to: "booking_payments#success"

  resources :wishlists, only: [:index]

  resource :profile, only: [:update, :edit]

  resource :password, only: [:update, :edit]

  resources :reservations, only: [:index] do
    resources :reviews, only: [:new, :create]
  end

  namespace :owner do
    resources :dashboard, only: [:index]
    resources :properties
    resources :reservations, only: [:index]
  end



  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "homes#index" # This is commented out since it's already defined above
end
