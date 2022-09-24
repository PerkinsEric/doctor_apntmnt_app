Rails.application.routes.draw do
 
  namespace :api do 
    resources :users 
    
    resources :doctors do 
      resources :appointments
    end

  end
  
end