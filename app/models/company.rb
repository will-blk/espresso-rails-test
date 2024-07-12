# frozen_string_literal: true

class Company < ApplicationRecord
  validates :name, :cnpj, presence: true
  validates :cnpj, format: /\d{14}/, uniqueness: true
end
