class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  # ==================================================================================
  # 本番環境でリンクを飛ぶ際の各パーツのリンク先
  def get_cpu_id
    Pcpart.find_by(category: "CPU").id
  end

  def get_motherboard_id
    Pcpart.find_by(category: "マザーボード").id
  end

  def get_memory_id
    Pcpart.find_by(category: "メモリー").id
  end

  def get_hdd_id
    Pcpart.find_by(category: "HDD").id
  end

  def get_ssd_id
    Pcpart.find_by(category: "SSD").id
  end

  def get_videocard_id
    Pcpart.find_by(category: "グラフィックボード").id
  end

  def get_powersupply_id
    Pcpart.find_by(category: "電源ユニット").id
  end

  def get_pccase_id
    Pcpart.find_by(category: "PCケース").id
  end

  def get_cpucooler_id
    Pcpart.find_by(category: "CPUクーラー").id
  end

  def get_display_id
    Pcpart.find_by(category: "液晶ディスプレイ").id
  end
end
