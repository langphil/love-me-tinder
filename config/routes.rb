Rails.application.routes.draw do

  get 'landing/index'

  get 'instruction/index'

  get 'lose/index'

  get 'outcome/index'

  resources :game
  get 'game/index'

  get 'player/new'
  root 'landing#index'

  resources :player
  resources :welcome
  resources :outcome
  resources :lose
  resources :instruction
  resources :landing
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
