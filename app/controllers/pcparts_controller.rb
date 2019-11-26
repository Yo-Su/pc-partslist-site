class PcpartsController < ApplicationController
  def index
  end

  def show
    @category = Pcpart.find(params[:id])
    @parts_lists = PartsList.includes(:user)
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
    end
  end
end
