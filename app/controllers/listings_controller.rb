class ListingsController < ApplicationController
    skip_before_action :authorized, only: :index

    def index
        listings = Listing.all
        render json: listings
    end

end
