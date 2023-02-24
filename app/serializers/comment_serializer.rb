class CommentSerializer < ActiveModel::Serializer
  attributes :id, :image, :description
  has_one :listing
  has_one :user
end
