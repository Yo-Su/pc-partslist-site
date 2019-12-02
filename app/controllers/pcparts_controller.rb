class PcpartsController < ApplicationController
  def index
    @parts_lists = PartsList.includes(:user).where(public_private: "1")
  end

  def show
    @category = Pcpart.find(params[:id])
    @parts_lists = PartsList.includes(:user).where(user_id: current_user.id) if user_signed_in?

    case @category.category
    when "CPU"
      @cpus = @category.cpus
    when "マザーボード"
      @mbs = @category.mbs
    when "メモリー"
      @memories = @category.memories
    when "HDD"
      @hdds = @category.hdds
    when "SSD"
      @ssds = @category.ssds
    when "グラフィックボード"
      @videocards = @category.videocards
    when "電源ユニット"
      @powers = @category.powers
    when "PCケース"
      @pccases = @category.pccases
    when "CPUクーラー"
      @cpucoolers = @category.cpucoolers
    when "液晶ディスプレイ"
      @displays = @category.displays
    end
  end
end
