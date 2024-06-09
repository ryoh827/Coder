# frozen_string_literal: true

N = gets.to_i
A = gets&.split(' ')&.map(&:to_i) || []

memo = Array.new(N, 0)

ans = []

A.each do |a|
  index = a - 1
  memo[index] += 1
  ans << a if memo[index] == 2
end

puts ans.join(' ')
