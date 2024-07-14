# frozen_string_literal: true

class StatementsController < ApplicationController
  before_action :authenticate_user!

  def index
    @completed_statements = policy_scope(Statement.completed)
    @open_statements = policy_scope(Statement.open)

    authorize Statement
  end

  def archive
    @statement = Statement.find(params[:statement_id])

    authorize @statement

    if @statement.update(archived: true)
      render json: { message: 'Statement was archived!' }
    else
      render json: { errors: @card.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def attach_invoice
    @statement = Statement.find(params[:statement_id])

    authorize @statement

    if @statement.invoice.attach(attach_invoice_params[:file])
      render json: { message: 'Statement was archived!' }
    else
      render json: { errors: @card.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def attach_invoice_params
    params.permit(:file)
  end
end
