module ApplicationHelper

  # 開いているページのパーツカテゴリのDBを更新する
  def link_to_update_db(id)
    case id
    when 1
      link_to "データベース登録", "/pcparts/1/cpus", method: :post
    end
  end
end
