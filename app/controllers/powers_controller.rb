class PowersController < ApplicationController
  def create
    @parts_lists = []
    get_power
    save_power
    redirect_to pcpart_path(7)
  end

  private
    require "anemone"

    def get_power
      list1  = [] #["メーカー名"]
      list2  = [] #["製品名"]
      list3  = [] #["対応規格"]
      list4  = [] #["電源容量"]
      list5  = [] #["80PLUS認証"]
      # list6  = [] #["プラグイン対応"]
      # list7  = [] #["バスインターフェイス"]
      # list8  = [] #["バスインターフェイス"]
      # list9  = [] #["三次キャッシュ"]
      # list10 = [] #["マルチスレッド"]
      # list11 = [] #["TDP"]
      list12 = [] #["画像"]
      list13 = [] #["個別ID"]
      Anemone.crawl("https://kakaku.com/specsearch/0590/?st=2&_s=2&Sort=saledate_desc&DispSaleDate=on&", :depth_limit => 0) do |anemone|
        anemone.on_every_page do |page|

          # メーカー名と製品名はテーブルの同じセルに記載されているため他と処理を分ける
          # メーカー名を抜き出してlist1に入れる
          page.doc.xpath("//td[contains(@class, 'textL')]").each do |title|
            list1.push(title.elements[0].text)
          end
          # 製品名を抜き出してlist2に入れる
          page.doc.xpath("//td[contains(@class, 'textL')]").each do |title|
            list2.push(title.elements[2].text)
          end
          # 対応規格を抜き出してlist3に入れる
          page.doc.xpath("//label[contains(@title, '対応規格')]").each do |title|
            list3.push(title.text)
          end
          # 電源容量を抜き出してlist4に入れる
          page.doc.xpath("//label[contains(@title, '電源容量')]").each do |title|
            list4.push(title.text)
          end
          # 80PLUS認証を抜き出してlist5に入れる
          page.doc.xpath("//label[contains(@title, '80PLUS認証')]").each do |title|
            list5.push(title.text)
          end

          # # プラグイン対応を抜き出してlist6に入れる
          # page.doc.xpath("//label[contains(@title, 'プラグイン対応')]").each do |title|
          #   list6.push(title.text)
          # end

          # # バスインターフェイスを抜き出してlist8に入れる
          # page.doc.xpath("//label[contains(@title, 'バスインターフェイス')]").each do |title|
          #   list8.push(title.text)
          # end
          # # タイプを抜き出してlist6に入れる(完全一致)
          # page.doc.xpath("//label[@title='タイプ']").each do |title|
          #   list6.push(title.text)
          # end
          # # TDPを抜き出してlist11に入れる
          # page.doc.xpath("//label[contains(@title, 'TDP')]").each do |title|
          #   list11.push(title.text)
          # end

          # 画像URLを抜き出してlist12に入れる
          page.doc.xpath("//img[not(contains(@src, 'guide')) and (contains(@src, '.jpg') or contains(@src, 'nowprinting.gif'))]/@src").each do |title|
            title = "no_image.jpg" if title.to_s.match(/.gif/)
            list12.push(title.to_s)
          end
          # 個別IDを抜き出してlist13に入れる
          page.doc.xpath("//input[contains(@name, 'ProductID')]/@value").each do |title|
            list13.push(title.to_s)
          end

          # リスト1~13を結合（各製品毎に配列をまとめる。多重配列になる）
          # list0 = list1.zip(list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13)
          @parts_lists = list1.zip(list2, list3, list4, list5, list12, list13)
        end
      end
    end

    def save_power
      @parts_lists.each do |parts_list|
        power_list = Power.find_or_initialize_by(item_value: parts_list[6])
        power_list.update_attributes(
          brand:      parts_list[0],
          name:       parts_list[1],
          standard:   parts_list[2],
          capacity:   parts_list[3],
          plus:       parts_list[4],
          pcpart_id:  7,
          image:      parts_list[5],
          item_value: parts_list[6]
        )
      end
    end
end
