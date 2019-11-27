class PartsListsController < ApplicationController
  before_action :signed_in_user
  before_action :only_current_user

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
    if params[:list_id]
      params[:id] = params[:list_id]
      @parts_list = PartsList.find(params[:id])
      @parts_list.update(parts_list_params)
      redirect_to user_parts_lists_path(current_user.id)
    else
      redirect_to user_parts_lists_path(current_user.id)
      flash[:alert] = "パーツリストがありません"
    end
  end

  def destroy
    @parts_list = PartsList.find(params[:id])
    @parts_list.destroy
    redirect_to user_parts_lists_path(current_user.id)
  end

  private
    def parts_list_params
      params.permit(:name, :cpu_id, :mb_id, :memory_id, :hdd_id, :ssd_id, :videocard_id, :power_id, :pccase_id, :cpucooler_id, :display_id).merge(public_private: 1).merge(user_id: current_user.id)
    end

    def signed_in_user
      unless signed_in?
        redirect_to root_path
        flash[:alert] = "ログインして下さい"
      end
    end

    def only_current_user
      @user = User.find(params[:user_id])
      redirect_to user_parts_lists_path(current_user.id) unless current_user == @user
    end

end
