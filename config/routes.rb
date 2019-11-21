Rails.application.routes.draw do
  root to:  'parts_lists#index'
  get '/kakaku', to: 'kakakus#index'
  devise_for :users
  resources :pcparts, only: [:index, :show] do
    resources :cpus, only: [:index, :create]
    resources :mbs, only: :index
  end
  resources :users, only: :show do
    resources :parts_lists, only: [:index, :new]
  end
end
