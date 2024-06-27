Rails.application.routes.draw do
  devise_for :users  
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  resources :homes

  root to: "homes#index" 
  
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "homes#index" # This is commented out since it's already defined above
end
