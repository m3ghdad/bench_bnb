class Api::BenchesController < ApplicationController
  before_action :require_logged_in, only: [:create]
  
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end



  def show
    @bench = Bench.find(params[:id])
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end
