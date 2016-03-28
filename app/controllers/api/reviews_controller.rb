class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.valid?
      @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end
  private
  def review_params
    params.require(:review).permit(:body, :rating, :bench_id)
  end
end
