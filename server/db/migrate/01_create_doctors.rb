class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :department
      t.string :specialisation
      t.integer :office_number
      t.integer :phone_number
  end
end
