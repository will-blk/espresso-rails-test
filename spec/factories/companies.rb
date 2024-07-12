FactoryBot.define do
  factory :company do
    name { Faker::Company.name }
    cnpj { Faker::CNPJ.numeric }
  end
end
