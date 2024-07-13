# frozen_string_literal: true

class User < ApplicationRecord
  ROLES = %i[
    admin
    employee
  ].freeze

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :recoverable,
         :rememberable, :validatable

  belongs_to :company, optional: true

  validates :name, :role, presence: true
  validates :company, presence: true, if: -> { employee? }

  enum role: ROLES

  before_validation :set_password, on: :create

  private

  def set_password
    self.password ||= SecureRandom.hex(8)
  end
end
