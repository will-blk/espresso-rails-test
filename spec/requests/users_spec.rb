# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'UsersController' do
  let!(:user) { create(:user, role: :admin) }
  let!(:company) { create(:company) }

  before { sign_in(user) }

  describe 'POST /companies/:id/users' do
    let(:params) do
      {
        user: {
          name: Faker::Name.name,
          email: Faker::Internet.unique.email,
          role: User::ROLES.sample
        }
      }
    end

    it 'returns http created' do
      post("/companies/#{company.id}/users", params: params)

      expect(response).to have_http_status(:created)
    end

    it 'saves user' do
      expect { post("/companies/#{company.id}/users", params: params) }.to change(User, :count).by(1)
    end

    context 'with invalid params' do
      let(:params) do
        {
          user: {
            name: Faker::Name.name,
            email: '',
            role: ''
          }
        }
      end

      it 'returns bad request' do
        post("/companies/#{company.id}/users", params: params)

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
