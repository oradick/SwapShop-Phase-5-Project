class ListingsController < ApplicationController
    skip_before_action :authorized, only: [:index, :create]

    def index
        listings = Listing.all
        render json: listings
    end

    def create
        new_listing = Listing.create!(listing_params)
        render json: new_listing, status: :created
    end

    private

    def listing_params
        params.permit(:creator_id, :recipient_id, :offer, :image, :description, :size, :keywords)
    end
end
