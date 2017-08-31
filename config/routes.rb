Rails.application.routes.draw do

  get 'outcome/index'

  resources :game
  get 'game/index'

  get 'player/new'
  root 'player#new'

  resources :player
  resources :welcome
  resources :outcome

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
