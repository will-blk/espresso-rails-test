# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :users
  has_many :cards, through: :users
  has_many :categories

  validates :name, :cnpj, presence: true
  validates :cnpj, format: /\A\d{14}\z/, uniqueness: true
end
