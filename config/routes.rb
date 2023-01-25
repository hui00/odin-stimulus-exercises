Rails.application.routes.draw do
  resources :pages, only: [:new, :create, :destroy, :homepage] do
    collection do
      get :color
    end
  end

  root "pages#homepage"
end
