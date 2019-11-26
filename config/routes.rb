Rails.application.routes.draw do
  root to:  'pcparts#index'
  get '/kakaku', to: 'kakakus#index'
  devise_for :users
  resources :pcparts, only: [:index, :show] do
    resources :cpus, only: [:index, :create]
    resources :mbs, only: [:index, :create]
    resources :memories, only: [:index, :create]
    resources :hdds, only: [:index, :create]
    resources :ssds, only: [:index, :create]
    resources :videocards, only: [:index, :create]
    resources :powers, only: [:index, :create]
    resources :pccases, only: [:index, :create]
    resources :cpucoolers, only: [:index, :create]
  end
  resources :users, only: :show do
    resources :parts_lists, only: [:index, :new, :create, :edit, :update, :destroy]
  end
end
