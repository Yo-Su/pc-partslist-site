class PartsList < ApplicationRecord
  belongs_to :cpu
  belongs_to :mb
  belongs_to :hdd
  belongs_to :ssd
  belongs_to :videocard
  belongs_to :power
  belongs_to :pccase
  belongs_to :cpucooler
  belongs_to :display
  belongs_to :user
end
