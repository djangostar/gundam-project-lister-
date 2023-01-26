class ApplicationController < ActionController::API
  require 'pry'
  include ActionController::Cookies

  def current_user
    User.find_by_id(session[:user_id])
  end

  def authorize_user
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end
end
