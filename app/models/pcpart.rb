class Pcpart < ApplicationRecord
  has_many :cpus
  has_many :mbs
end
