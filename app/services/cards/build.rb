# frozen_string_literal: true

module Cards
  class Build
    def initialize(user_id, card_params)
      @user = User.find(user_id)
      @card_params = card_params
    end

    def execute
      Card.new(card_params.merge(user: user))
    end

    private

    attr_reader :user, :card_params
  end
end
