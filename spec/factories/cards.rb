# frozen_string_literal: true

FactoryBot.define do
  factory :card do
    user
    last4 { rand(1000..9999) }
  end
end
