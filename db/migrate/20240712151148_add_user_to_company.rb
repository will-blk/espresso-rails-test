# frozen_string_literal: true

class AddUserToCompany < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :company
  end
end
