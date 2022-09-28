class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.datetime :stime
      t.datetime :sdate
      t.text :desc
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :doctor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
