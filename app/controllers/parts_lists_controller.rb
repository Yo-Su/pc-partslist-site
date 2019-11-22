class PartsListsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @lists = @user.parts_lists.includes(:user)
  end

  def new
    @parts_list = PartsList.new

  end

  def create
    @parts_list = PartsList.new(parts_list_params)
    @parts_list.save
    redirect_to user_parts_lists_path(current_user.id)
  end

  def edit
    @parts_list = PartsList.find(params[:id])
  end

  def update
    @parts_list = PartsList..find(params[:id])
    @parts_list.save(parts_list_params)
    redirect_to user_parts_lists_path(current_user.id)
  end

  def destroy

  end

  private
    def parts_list_params
      params.permit(:name).merge(public_private: 1).merge(user_id: current_user.id)
    end

end
