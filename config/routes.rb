Rails.application.routes.draw do
  root to:  'parts_lists#index'
  devise_for :users
  resources :pc_parts, only: :index do
    resources :cpus, only: :index
    resources :mbs, only: :index
  end
end
