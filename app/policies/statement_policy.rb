class StatementPolicy < ApplicationPolicy
  def index?
    true
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
