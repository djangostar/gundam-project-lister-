class GundamsController < ApplicationController
  
  def index
    gundams = Gundam.all 
    render json: gundams
  end
  
  def create
  end

  def update
  end

  def destroy
  end

  private

  def gundam_params
    params.permit(:name, :model_series, :grade, :year, :img_url)
  end
end
