# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root to: 'home#index'

  scope 'users/:user_id' do
    resources :cards, only: %i[new create]
  end

  namespace 'api' do
    namespace 'baas' do
      post 'webhook'
    end
  end

  scope 'statements/:statement_id' do
    patch 'archive', to: 'statements#archive'
  end

  resources :companies, only: %i[new create] do
    resources :users, only: %i[new create index]
    resources :categories, only: %i[new create]
    resources :statements, only: :index
  end
end
