class Pcpart < ApplicationRecord
  has_many :cpus
  has_many :motherboards
  has_many :memories
  has_many :hdds
  has_many :ssds
  has_many :videocards
  has_many :powers
  has_many :pccases
  has_many :cpucoolers
  has_many :displays
end
