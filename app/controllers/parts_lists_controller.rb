class PartsListsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @lists = @user.parts_lists.includes(:user)
  end

  def new
    @parts_list = PartsList.new(name: "testlist", public_private: 1, user_id: current_user.id)
    @parts_list.save
    redirect_to user_parts_lists_path(current_user.id)
  end

  private
    def parts_list_params
      params.merge(name: "testlist", public_private: 1).merge(user_id: current_user.id)
    end

end
