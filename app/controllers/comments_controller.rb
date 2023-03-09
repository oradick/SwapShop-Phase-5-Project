class CommentsController < ApplicationController
    skip_before_action :authorized, only: [:index, :create, :destroy, :update, :show]

    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def show
        comment = Comment.find_by(id: params[:id])
        render json: comment, status: :ok
    end

    def create
        new_comment = Comment.create!(comment_params)
        render json: new_comment, status: :created
    end

    private

    def comment_params
        params.permit(:listing_id, :user_id, :image, :description)
    end


end
