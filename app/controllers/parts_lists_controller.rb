class PartsListsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @lists = @user.parts_lists.includes(:user)
  end

end
