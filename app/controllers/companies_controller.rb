# frozen_string_literal: true

class CompaniesController < ApplicationController
  before_action :authenticate_user!

  def new
    authorize Company
  end

  def create
    @company = Company.new(company_params)

    authorize @company

    if @company.save
      redirect_to new_company_user_url(@company), notice: 'Company was successfully created.', status: :created
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def company_params
    params.require(:company).permit(:name, :cnpj)
  end
end
