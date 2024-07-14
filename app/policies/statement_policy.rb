# frozen_string_literal: true

class StatementPolicy < ApplicationPolicy
  def index?
    true
  end

  def archive?
    user.admin?
  end

  def attach_invoice?
    user.employee? && record.card == user.card
  end

  class Scope < ApplicationPolicy::Scope
    def resolve
      if user.admin?
        scope.joins(:company).where(companies: { id: user.company })
      else
        scope.where(card: user.card)
      end
    end
  end
end
