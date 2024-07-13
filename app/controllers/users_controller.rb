# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = Company.find(params[:company_id]).users
  end

  def new; end

  def create
    @user = User.new(user_params.merge(company_id: params[:company_id]))

    if @user.save
      redirect_to company_users_url(params[:company_id]), notice: 'User was successfully created.', status: :created
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :role)
  end
end
