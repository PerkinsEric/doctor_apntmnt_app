class CreateAppontments < ActiveRecord::Migration[7.0]
  def change
    create_table :appontments do |t|
      t.string :stime
      t.string :sdate
      t.text :description

      t.timestamps
    end
  end
end
