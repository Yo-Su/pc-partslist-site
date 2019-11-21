class Cpu < ApplicationRecord
  has_many :parts_lists
  belongs_to :pcpart
end
