# frozen_string_literal: true

class CardsController < ApplicationController
  before_action :authenticate_user!

  def new
    authorize Card
  end

  def create
    @card = Card.new(card_params)

    authorize @card

    if @card.save
      redirect_to company_users_url(@card.company), notice: 'Card was successfully created.', status: :created
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def card_params
    params.require(:card).permit(:name, :cnpj)
  end
end
