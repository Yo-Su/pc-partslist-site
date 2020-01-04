module ApplicationHelper

# ==================================================================================
  # パーツリスト一覧で各パーツのデータ取得用
  def get_cpu_name(id)
    data = Cpu.find_by_id(id)
    data ? data.name : ""
  end

  def get_motherboard_name(id)
    data = Mb.find_by_id(id)
    data ? data.name : ""
  end

  def get_memory_name(id)
    data = Memory.find_by_id(id)
    data ? data.name : ""
  end

  def get_hdd_name(id)
    data = Hdd.find_by_id(id)
    data ? data.name : ""
  end

  def get_ssd_name(id)
    data = Ssd.find_by_id(id)
    data ? data.name : ""
  end

  def get_videocard_name(id)
    data = Videocard.find_by_id(id)
    data ? data.name : ""
  end

  def get_powersupply_name(id)
    data = Power.find_by_id(id)
    data ? data.name : ""
  end

  def get_pccase_name(id)
    data = Pccase.find_by_id(id)
    data ? data.name : ""
  end

  def get_cpucooler_name(id)
    data = Cpucooler.find_by_id(id)
    data ? data.name : ""
  end

  def get_display_name(id)
    data = Display.find_by_id(id)
    data ? data.name : ""
  end

# ==================================================================================
  # パーツリスト一覧で各パーツのデータ取得用
  def get_cpu(id)
    Cpu.find_by_id(id)
  end

  def get_motherboard(id)
    Mb.find_by_id(id)
  end

  def get_memory(id)
    Memory.find_by_id(id)
  end

  def get_hdd(id)
    Hdd.find_by_id(id)
  end

  def get_ssd(id)
    Ssd.find_by_id(id)
  end

  def get_videocard(id)
    Videocard.find_by_id(id)
  end

  def get_powersupply(id)
    Power.find_by_id(id)
  end

  def get_pccase(id)
    Pccase.find_by_id(id)
  end

  def get_cpucooler(id)
    Cpucooler.find_by_id(id)
  end

  def get_display(id)
    Display.find_by_id(id)
  end

# ==================================================================================
  # 本番環境でリンクを飛ぶ際の各パーツのリンク先
  def link_cpu
    pcpart_path(Pcpart.find_by(category: "CPU").id)
  end

  def link_motherboard
    pcpart_path(Pcpart.find_by(category: "マザーボード").id)
  end

  def link_memory
    pcpart_path(Pcpart.find_by(category: "メモリー").id)
  end

  def link_hdd
    pcpart_path(Pcpart.find_by(category: "HDD").id)
  end

  def link_ssd
    pcpart_path(Pcpart.find_by(category: "SSD").id)
  end

  def link_videocard
    pcpart_path(Pcpart.find_by(category: "グラフィックボード").id)
  end

  def link_powersupply
    pcpart_path(Pcpart.find_by(category: "電源ユニット").id)
  end

  def link_pccase
    pcpart_path(Pcpart.find_by(category: "PCケース").id)
  end

  def link_cpucooler
    pcpart_path(Pcpart.find_by(category: "CPUクーラー").id)
  end

  def link_display
    pcpart_path(Pcpart.find_by(category: "液晶ディスプレイ").id)
  end

end
