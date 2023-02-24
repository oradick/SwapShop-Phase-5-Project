class ListingSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :size, :keywords, :offer
end
