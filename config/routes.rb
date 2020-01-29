Rails.application.routes.draw do
  get 'main/index'

  root 'main#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
