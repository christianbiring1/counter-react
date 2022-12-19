#!/usr/bin/ruby


# (1..10).each do |n|
#   break if n >= 5
#   puts n
# end

#  a = 555.to_s

#  def has_repeat number
#     arr = number.to_s.split('')
#     is_repeat = false
#     i = 0
#     while(i < arr.size - 1) do
#       if(arr[i] == arr[i + 1])
#         is_repeat = true
#         puts arr[i], arr[i+1]
#         # break
#       else
#         is_repeat = false
#         puts arr[i], arr[i+1]
#         break
#       end
#       i += 1
#     end
#     is_repeat
#  end

#  puts has_repeat 555333

def letter_avatar(user_hash)
   colors = ['red','blue','yellow','green','pink','ambar','black'] 
  #  …. Your code ….
  first_name = user_hash[:first_names]
  last_name = user_hash[:last_name]
  initials = ''
  if(first_name.is_a?(String) != true) 
    first_initial = nil
    initials = nil
  elsif(last_name.is_a?(String) != true)
    last_initial = nil
    initials = nil
  else
    first_name = first_name.upcase.chr
    last_name = last_name.upcase.chr
    initials = first_name + last_name
  end

  max_color = colors.size - 1
  index = rand(0..max_color)
  usercolor = colors[index]
  {initials: initials, usercolor: usercolor}
end

# Input examples:
p letter_avatar({id: 23, first_names: 'Robert', last_name: 'Bose'})
p letter_avatar({id: 23, first_names: nil, last_name: nil})
# {initials: ‘RB’, color: ‘blue’} (The color doesn’t need to be blue in this case, but the initials should be exactly that)


def format(s)
  length = s.tr('^0-9', '').size
  if( length == 10 )
    return s.tr('^0-9', '').gsub(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '\1-\2-\3-\4')
  elsif(length == 8)
    return s.tr('^0-9', '').gsub(/^(\d{3})(\d{3})(\d{2})$/, '\1-\2-\3')
  end
end

p format("(+1) 888 33x19")
p format("555 123 1234")


# Remove any non-digit characters
# Return the digits in groups of 3, separated by hyphen ("-")
# Except if you'd end up like this "...xxx-x" instead group the last ones like so "...xx-xx"

# format("555 123 1234") => "555-123-12-34"
# format("(+1) 888 33x19") => "188-833-19"

