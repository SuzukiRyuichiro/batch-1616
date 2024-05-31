racers = ['Junior Penn Cho', 'Andrew Beckett', 'Yuki Hozumi', 'Ramone Robertson']

# print "Junior is ready to start the day!!"
# print "Andrew is ready to start the day!!"
# print "Yuki is ready to start the day!!"
# print "Ramone is ready to start the day!!"

racers.each do |racer|
  puts "#{racer.split.first} is ready to start the day!!"
end

# print "P1 - Junior is ready to start the race!!"
# print "P2 - Andrew is ready to start the race!!"
# print "P3 - Yuki is ready to start the race!!"
# print "P4 - Ramone is ready to start the race!!"

racers.each_with_index do |racer, index|
  puts "P#{index + 1} - #{racer.split.first} is ready to start the race!!"
end

racers.map { |racer| racer.split.first.upcase }.with_index do |upcased_first_name, index|
  puts "P#{index + 1} - #{upcased_first_name} is ready to start the race!!"
end
