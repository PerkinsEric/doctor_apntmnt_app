
User.delete_all
Doctor.delete_all

5.times do
  user = User.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::FunnyName.name,
    img: Faker::Avatar.image
  )

  doctor = Doctor.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::FunnyName.name,
    img: Faker::Avatar.image 
  )

  Appointment.create(
    user_id: user.id,
    doctor_id: doctor.id
  )

end

puts "Users Number #{User.all.count}"

User.all.each do |u| 
  puts "#{u.first_name} #{u.last_name}" 
end

puts "Doctors Number #{Doctor.all.count}"

Doctor.all.each do |d| 
  puts "#{d.first_name}" 
  puts "#{d.last_name}" 
  puts "#{d.specialty}" 
  puts "--------" 
end

puts "Appointment Count #{Appointment.all.count}"