# frozen_string_literal: true

class CategoriesController < ApplicationController
  before_action :authenticate_user!

  def index
    @categories = policy_scope(Category)
    authorize @categories
  end

  def new
    authorize Category
  end

  def create
    @category = Categories::Build.new(params[:company_id], category_params).execute
    authorize @category

    if @category.save
      render json: { message: 'Category was successfully created.', status: :created }
    else
      render json: { errors: @category.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end
end
