# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    name { Faker::Name.unique.name }
    email { Faker::Internet.unique.email }
    role { User::ROLES.keys.sample }
    password { Faker::Internet.password }
    company { employee? ? create(:company) : nil }
  end
end
