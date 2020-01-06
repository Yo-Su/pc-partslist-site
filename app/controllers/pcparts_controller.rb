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

    gon.cpu_id       = Pcpart.find_by(category: "CPU").id
    gon.mb_id        = Pcpart.find_by(category: "マザーボード").id
    gon.memory_id    = Pcpart.find_by(category: "メモリー").id
    gon.hdd_id       = Pcpart.find_by(category: "HDD").id
    gon.ssd_id       = Pcpart.find_by(category: "SSD").id
    gon.videocard_id = Pcpart.find_by(category: "グラフィックボード").id
    gon.power_id     = Pcpart.find_by(category: "電源ユニット").id
    gon.pccase_id    = Pcpart.find_by(category: "PCケース").id
    gon.cpucooler_id = Pcpart.find_by(category: "CPUクーラー").id
    gon.display_id   = Pcpart.find_by(category: "液晶ディスプレイ").id
  end
end
