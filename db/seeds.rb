# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FactoryBot.create(:company) if Company.count.zero?
if User.admin.count.zero?
  FactoryBot.create(:user, role: :admin, email: 'hello@world.com', password: '123456',
                           company: Company.first)
end
FactoryBot.create_list(:user, 5, role: :employee, company: Company.first) if User.employee.count.zero?

if Card.count.zero?
  User.employee.find_each do |employee|
    FactoryBot.create(:card, user: employee)
  end
end

if Statement.count.zero?
  User.employee.includes(:card).find_each do |employee|
    FactoryBot.create_list(:statement, 10, card: employee.card)
  end
end
