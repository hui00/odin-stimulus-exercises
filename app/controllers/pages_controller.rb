class PagesController < ApplicationController
  def homepage
    @car = Car.new
    @car.variants.build

    # get all different models from the car 
    @models = Car.all.map(&:model).uniq
    @colors = Car.all.map(&:color).uniq
  end

  def new
    @car = Car.new
  end

  def create
    @car = Car.new(car_params)
    if @car.save
      redirect_to @car
    else
      render :new
    end
  end

  def color 
    params = params[:color]

  end

  def destroy
    @car = Car.find(params[:id])
    @car.destroy
    redirect_to root_path
  end
end
