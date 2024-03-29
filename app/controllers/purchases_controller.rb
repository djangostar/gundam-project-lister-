class PurchasesController < ApplicationController
  before_action :authorize_user, only: [:update, :destroy]
 
  # GET /purchases
  def index
    purchases = current_user.purchases
    render json: purchases, status: :ok
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
    purchases = Purchase.where(user_id: params[:id])
    if purchases
    render json: purchases, status: :ok
    else
      render json: { errors: "Purchase not found" }, status: :not_found
    end
  end

  def update
    purchase = Purchase.find_by(id: params[:id])
    purchase.update(patch_params)
    render json: purchase, status: :ok
  end

  def destroy
    purchase = Purchase.find_by(id: params[:id])
    purchase.destroy
  end

  def test
    puts 'test'
  end

  private 

  def purchase_params
    params.permit(:price, :gundam_id, :user_id )
  end

  def patch_params
    params.permit(:price, :id )
  end
end