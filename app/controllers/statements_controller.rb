# frozen_string_literal: true

class StatementsController < ApplicationController
  before_action :authenticate_user!

  def index
    @statements = policy_scope(Statement)

    authorize @statements
  end
end
