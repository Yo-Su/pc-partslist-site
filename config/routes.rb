Rails.application.routes.draw do
  root to:  'parts_lists#index'
  get '/kakaku', to: 'kakakus#index'
  devise_for :users
  resources :pcparts, only: [:index, :show, :create] do
    resources :cpus, only: :index
    resources :mbs, only: :index
  end
end
