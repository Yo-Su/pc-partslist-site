class PartsListsController < ApplicationController
  before_action :signed_in_user
  before_action :only_current_user

  def index
    @user = User.find(params[:user_id])
    @lists = @user.parts_lists.includes(:user)
  end

  def show
    @parts_list = PartsList.find(params[:id])
    @user = User.find(params[:user_id])
    @lists = @user.parts_lists.includes(:user)

    @cpu = Cpu.find_by_id(@parts_list.cpu_id)
    @mb = Mb.find_by_id(@parts_list.mb_id)
    @memory = Memory.find_by_id(@parts_list.memory_id)
    @hdd = Hdd.find_by_id(@parts_list.hdd_id)
    @ssd = Ssd.find_by_id(@parts_list.ssd_id)
    @videocard = Videocard.find_by_id(@parts_list.videocard_id)
    @power = Power.find_by_id(@parts_list.power_id)
    @pccase = Pccase.find_by_id(@parts_list.pccase_id)
    @cpucooler = Cpucooler.find_by_id(@parts_list.cpucooler_id)
    @display = Display.find_by_id(@parts_list.display_id)
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
      params.permit(:name, :cpu_id, :mb_id, :memory_id, :hdd_id, :ssd_id, :videocard_id, :power_id, :pccase_id, :cpucooler_id, :display_id).merge(public_private: params[:public_private]).merge(user_id: current_user.id)
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
