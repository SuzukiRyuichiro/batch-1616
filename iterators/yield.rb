def say_hello
  puts 'Hello before the yield'
  yield if block_given?
  puts 'Hello after the yield'
end
