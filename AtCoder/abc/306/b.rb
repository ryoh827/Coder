# frozen_string_literal: true

nums = (0..64).map { |i| 2 ** i }

inputs = gets&.split(' ')&.map(&:to_i) || []

answer = 0
inputs.each_with_index do |i, index|
  answer += nums[index] if i == 1
end

puts answer
