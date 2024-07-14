# frozen_string_literal: true

class StatementsController < ApplicationController
  before_action :authenticate_user!

  def index
    @completed_statements = policy_scope(Statement.completed)
    @open_statements = policy_scope(Statement.open)

    authorize Statement
  end
end
