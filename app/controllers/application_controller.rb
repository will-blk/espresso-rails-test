# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Pundit::Authorization

  after_action :verify_authorized

  rescue_from ActionController::ParameterMissing, with: -> { head :bad_request }
end
