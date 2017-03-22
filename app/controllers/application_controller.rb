class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :authenticate_account!

  def authenticate_account!
    if session[:current_account_id]
      @current_account = Account.where(id: session[:current_account_id]).first
    end
  end
end

























