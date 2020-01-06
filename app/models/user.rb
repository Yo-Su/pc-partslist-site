class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :parts_lists

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 7 }
  validates :name, presence: true, uniqueness: true, length: { minimum: 4 }
end
