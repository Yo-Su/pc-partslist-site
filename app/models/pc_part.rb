class PcPart < ApplicationRecord
  has_many :cpus
  has_many :mbs
end
