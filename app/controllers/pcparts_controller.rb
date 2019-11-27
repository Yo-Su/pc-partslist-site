class PcpartsController < ApplicationController
  def index
  end

  def show
    @category = Pcpart.find(params[:id])
    @parts_lists = PartsList.includes(:user).where(user_id: current_user.id)
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
