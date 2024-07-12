class AddUserToCompany < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :companies
  end
end
