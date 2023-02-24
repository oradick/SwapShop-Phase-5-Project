class User < ApplicationRecord
    has_secure_password

    has_many :listings_as_creator, 
    foreign_key: :creator_id,
    class_name: :Listing
    
    has_many :listings_as_recipient, 
    foreign_key: :recipient_id,
    class_name: :Listing

    has_many :comments
end
