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





end
