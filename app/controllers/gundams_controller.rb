class GundamsController < ApplicationController
 
  # GET /gundams
  def index
    gundams = Gundam.all 
    render json: gundams, include: [:users, :purchases]
  end
  
  # GET /gundams/1
  def show
    gundam = Gundam.find_by(id: params[:id])
    render json: gundam, include: [:users, :purchases]
  end

  # POST /gundams
  def create
    gundam = Gundam.create!(gundam_params)
    render json: gundam, status: :created
  end

  # PATCH/PUT /gundams/1
  def update
    gundam = Gundam.find_by(id: params[:id])
    gundam.update(gundam_params)
    render json: gundam, status: :accepted
  end

  # DELETE /gundams/1
  def destroy
    gundam = Gundam.find_by(id: params[:id])
    gundam.destroy
    head :no_content
  end

  private

  def gundam_params
    params.permit(:name, :model_series, :grade, :year, :img_url)
  end
end
