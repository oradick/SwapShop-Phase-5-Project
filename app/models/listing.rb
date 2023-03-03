class Listing < ApplicationRecord
    belongs_to :creator, class_name: :User
    belongs_to :recipient, class_name: :User

    has_many :comments

    validates_presence_of :creator, :recipient, :image, :description, :size, :keywords
end
