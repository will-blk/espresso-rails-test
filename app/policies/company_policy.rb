class CompanyPolicy < ApplicationPolicy
  def create?
    user.admin?
  end
end
