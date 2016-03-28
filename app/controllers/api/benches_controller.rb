class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.filtered_by(params[:filters])
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.valid?
      @bench.save!
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end
  private
  def bench_params
    params.require(:bench).permit(:lat,:lng,:description)
  end
end
