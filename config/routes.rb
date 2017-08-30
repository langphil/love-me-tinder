Rails.application.routes.draw do

  get 'player/new'
  root 'player#new'

  resources :player
  resources :welcome

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
