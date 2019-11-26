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
    # binding.pry
    params[:id] = params[:list_id] if :list_id
    @parts_list = PartsList.find(params[:id])
    @parts_list.update(parts_list_params)
    # @parts_list.update(params[:hdd_id])
    # binding.pry
    redirect_to user_parts_lists_path(current_user.id)
  end

  def destroy
    @parts_list = PartsList.find(params[:id])
    @parts_list.destroy
    redirect_to user_parts_lists_path(current_user.id)
  end

  private
    def parts_list_params
      params.permit(:name, :cpu_id, :mb_id, :memory_id, :hdd_id).merge(public_private: 1).merge(user_id: current_user.id)
    end

end
