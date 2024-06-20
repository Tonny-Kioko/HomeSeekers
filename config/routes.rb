Rails.application.routes.draw do
  devise_for :users
  resources :homes

  root to: "homes#index" 
  
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "homes#index" # This is commented out since it's already defined above
end
