class SsdsController < ApplicationController
  def create
    @parts_lists = []
    get_ssd
    save_ssd
    redirect_to pcpart_path(5)
  end

  private
    require "anemone"

    def get_ssd
      list1  = [] #["メーカー名"]
      list2  = [] #["製品名"]
      list3  = [] #["容量"]
      list4  = [] #["規格サイズ"]
      list5  = [] #["インターフェイス"]
      list6  = [] #["タイプ"]
      # list7  = [] #["インターフェイス"]
      # list8  = [] #["キャッシュ"]
      # list9  = [] #["三次キャッシュ"]
      # list10 = [] #["マルチスレッド"]
      # list11 = [] #["TDP"]
      list12 = [] #["画像"]
      list13 = [] #["個別ID"]
      Anemone.crawl("https://kakaku.com/specsearch/0537/?st=2&_s=2&Sort=saledate_desc&DispSaleDate=on&InstallationType=1&", :depth_limit => 0) do |anemone|
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
          # 容量を抜き出してlist3に入れる
          page.doc.xpath("//label[contains(@title, '容量')]").each do |title|
            list3.push(title.text)
          end
          # 規格サイズを抜き出してlist4に入れる
          page.doc.xpath("//label[contains(@title, '規格サイズ')]").each do |title|
            list4.push(title.text)
          end
          # インターフェイスを抜き出してlist5に入れる
          page.doc.xpath("//label[contains(@title, 'インターフェイス')]").each do |title|
            list5.push(title.text)
          end
          # タイプを抜き出してlist6に入れる(完全一致)
          page.doc.xpath("//label[@title='タイプ']").each do |title|
            list6.push(title.text)
          end

          # # キャッシュを抜き出してlist8に入れる
          # page.doc.xpath("//label[contains(@title, 'キャッシュ')]").each do |title|
          #   list8.push(title.text)
          # end
          # # マルチスレッドを抜き出してlist10に入れる
          # page.doc.xpath("//label[contains(@title, 'マルチスレッド')]").each do |title|
          #   list10.push(title.text)
          # end
          # # TDPを抜き出してlist11に入れる
          # page.doc.xpath("//label[contains(@title, 'TDP')]").each do |title|
          #   list11.push(title.text)
          # end

          # 画像URLを抜き出してlist12に入れる
          page.doc.xpath("//img[contains(@src, '.jpg') or contains(@src, 'nowprinting.gif')]/@src").each do |title|
            title = "no_image.jpg" if title.to_s.match(/.gif/)
            list12.push(title.to_s)
          end
          # 個別IDを抜き出してlist13に入れる
          page.doc.xpath("//input[contains(@value, 'K')]/@value").each do |title|
            list13.push(title.to_s)
          end

          # リスト1~13を結合（各製品毎に配列をまとめる。多重配列になる）
          # list0 = list1.zip(list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13)
          @parts_lists = list1.zip(list2, list3, list4, list5, list6, list12, list13)
        end
      end
    end

    def save_ssd
      @parts_lists.each do |parts_list|
        ssd_list = Ssd.find_or_initialize_by(item_value: parts_list[7])
        ssd_list.update_attributes(
          brand:      parts_list[0],
          name:       parts_list[1],
          capacity:   parts_list[2],
          size:       parts_list[3],
          interface:  parts_list[4],
          ssdtype:       parts_list[5],
          pcpart_id:  5,
          image:      parts_list[6],
          item_value: parts_list[7]
        )
      end
    end
end
