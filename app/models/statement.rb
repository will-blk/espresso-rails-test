# frozen_string_literal: true

class Statement < ApplicationRecord
  belongs_to :category, optional: true
  belongs_to :card

  has_one :company, through: :card
  has_one_attached :invoice

  validates :cost, :merchant, :performed_at, :transaction_id, presence: true

  scope :completed, -> { where.not(category: nil) }
  scope :open, -> { where(category: nil) }
end
