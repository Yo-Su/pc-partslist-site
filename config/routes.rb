Rails.application.routes.draw do
  root to:  'parts_lists#index'
  devise_for :users
end
