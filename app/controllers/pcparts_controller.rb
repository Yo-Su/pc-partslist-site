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
    end
  end
end
