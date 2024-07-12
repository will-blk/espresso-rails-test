class User < ApplicationRecord
  ROLES = %i[
    admin
    employee
  ].freeze

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :recoverable,
         :rememberable, :validatable

  belongs_to :company, required: -> { :employee? }

  validates :name, :role, presence: true
  enum role: ROLES
end
