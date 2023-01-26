class PagesController < ApplicationController
  def homepage
    @car = Car.new
    @car.variants.build

    # get all different models from the car
    @models = Car.all.map(&:model).uniq
    @colors = Car.all.map(&:color).uniq
  end

  def create
    @car = Car.new(car_params)
    @car.variants.build(variant_params)
    @models = Car.all.map(&:model).uniq
    if @car.save
      redirect_to root_path
    else
      puts(@car.errors.full_messages)
      render :homepage
    end
  end

  def color
    brand = params[:brand]
    @colors = Car.where(model: brand).map(&:color).uniq
    @target = params[:target]
    respond_to do |format|
      format.turbo_stream
    end
  end

  def destroy
    @car = Car.find(params[:id])
    @car.destroy
    redirect_to root_path
  end

  private

  def car_params
    params.require(:car).permit(:model, :color, :year)
  end

  private

  def variant_params
    params.require(:variants_attributes).permit(:fuel_type, :transmission)
  end
end
