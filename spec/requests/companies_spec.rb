# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'CompaniesController' do
  let(:user) { create(:user, role: :admin) }

  before { sign_in(user) }

  describe 'POST /companies' do
    let(:params) do
      {
        company: {
          name: Faker::Company.name,
          cnpj: Faker::CNPJ.number
        }
      }
    end

    it 'returns http created' do
      post('/companies', params: params)

      expect(response).to have_http_status(:created)
    end

    it 'saves company' do
      expect { post('/companies', params: params) }.to change(Company, :count).by(1)
    end

    context 'with invalid params' do
      let(:params) do
        {
          company: {
            name: '',
            cnpj: '1'
          }
        }
      end

      it 'returns bad request' do
        post('/companies', params: params)

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
