class PcpartsController < ApplicationController
  def show
    @category = Pcpart.find(params[:id])
    case @category.category
    when "CPU"
      @cpus = @category.cpus
    when "マザーボード"
      @mb = @category.mbs
    end
  end
end
