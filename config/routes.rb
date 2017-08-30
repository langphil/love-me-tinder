Rails.application.routes.draw do
  get 'game/index'

  get 'welcome/index'
  root 'welcome#index'

  resources :game
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
