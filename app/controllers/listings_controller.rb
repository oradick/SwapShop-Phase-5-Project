class ListingsController < ApplicationController
    skip_before_action :authorized, only: [:index, :create, :destroy, :update, :show, :my_listings, :listings_i_claimed]
    wrap_parameters format: :none

    def index
        listings = Listing.all
        render json: listings
    end

    def create
        new_listing = Listing.create!(listing_params)
        render json: new_listing, status: :created
    end

    def update
        listing = Listing.find_by(id: params[:id])
        if listing
            listing.update!(listing_params)
            render json: listing, status: :ok
        else
           render json: {error: "Listing not found"}, status: :not_found
        end
    end

    def destroy
        listing = Listing.find_by(id: params[:id])
        if listing
            listing.destroy
            render json: {}
        else
            render json: { error: "Listing not found" }, status: :not_found
        end
    end

    def show
        listing = Listing.find(params[:id])
        render json: listing
    end

    def my_listings
        my_listings = Listing.where(creator_id: session[:user_id])
        render json: my_listings, status: :ok
    end

    def listings_i_claimed
    my_claims = Listing.all.where.not(creator_id: session[:user_id]).and(Listing.all.where(recipient_id:
    session[:user_id]))
    render json: my_claims, status: :ok
    end

    private

    def listing_params
        params.permit(:creator_id, :recipient_id, :offer, :image, :description, :size, :keywords)
    end
end
