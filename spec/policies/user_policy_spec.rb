require 'rails_helper'

RSpec.describe UserPolicy, type: :policy do
  let(:user) { build(:user, role: :employee) }
  let(:admin_user) { build(:user, role: :admin) }

  subject { described_class }

  permissions :create? do
    it { is_expected.to permit(admin_user) }
    it { is_expected.not_to permit(user) }
  end

  permissions :index? do
    it { is_expected.to permit(admin_user) }
    it { is_expected.not_to permit(user) }
  end
end
