# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = policy_scope(User)

    authorize @users
  end

  def new
    @company = Company.find(params[:company_id])

    authorize User
  end

  def create
    @user = User.new(user_params.merge(company_id: params[:company_id]))
    authorize User

    if @user.save
      render json: { message: 'User was successfully created' }, status: :created
    else
      render json: { errors: @user.errors.full_messages }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :role)
  end
end
