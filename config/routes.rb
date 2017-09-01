Rails.application.routes.draw do

  get 'lose/index'

  get 'outcome/index'

  resources :game
  get 'game/index'

  get 'player/new'
  root 'player#new'

  resources :player
  resources :welcome
  resources :outcome
  resources :lose
  resources :crush
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
