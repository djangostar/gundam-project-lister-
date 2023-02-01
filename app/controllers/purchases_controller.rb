class PurchasesController < ApplicationController
  before_action :authorize_user
 
  # GET /purchases
  def index
    purchases = current_user.purchases
    render json: purchases
  end

  # POST /purchases  
  def create
    purchase = current_user.purchases.create!(purchase_params)
    if purchase.valid?
      render json: purchase, status: :created
    else
      render json: { errors: purchase.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # GET /purchases/:id
  def show
    purchase = current_user.purchases.find_by(id: params[:id])
    if purchase
      render json: purchase, status: :ok
    else
      render json: { error: 'No such purchase'}, status: :unathorized
    end
  end

  private 

  def purchase_params
    params.permit(:price, :gundam_id, :user_id )
  end

  # def view_params
  #   params.permit(:user_id)
  # end
end
