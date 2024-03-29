class ApplicationController < ActionController::API
  require 'pry'
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def current_user
    User.find_by(id: session[:user_id])
  end

  def authorize_user
    return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end

  def render_not_found(error)
    render json: { errors: {error.model => "Not Found"}}, status: :not_found
  end 
end
