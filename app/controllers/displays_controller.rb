class DisplaysController < ApplicationController
  def create
    @parts_lists = []
    get_display
    save_display
    redirect_to pcpart_path(Pcpart.find_by(category: "液晶ディスプレイ").id)
  end

  private
    require "anemone"

    def get_display
      list1  = [] #["メーカー名"]
      list2  = [] #["製品名"]
      list3  = [] #["モニタサイズ"]
      list4  = [] #["モニタタイプ"]
      list5  = [] #["表示領域"]
      list6  = [] #["コントラスト比"]
      # list7  = [] #["バスインターフェイス"]
      # list8  = [] #["バスインターフェイス"]
      # list9  = [] #["三次キャッシュ"]
      # list10 = [] #["マルチスレッド"]
      # list11 = [] #["TDP"]
      list12 = [] #["画像"]
      list13 = [] #["個別ID"]
      # https://kakaku.com/specsearch/0085/?st=2&_s=2&Sort=saledate_desc&DispSaleDate=on&Page=2&
      Anemone.crawl("https://kakaku.com/specsearch/0085/?st=2&_s=2&Sort=saledate_desc&DispSaleDate=on&", :depth_limit => 0) do |anemone|
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
          # モニタサイズを抜き出してlist3に入れる
          page.doc.xpath("//label[contains(@title, 'モニタサイズ')]").each do |title|
            title.search('br').each { |br| br.replace(" ") }
            list3.push(title.text)
          end
          # モニタタイプを抜き出してlist4に入れる
          page.doc.xpath("//label[contains(@title, 'モニタタイプ')]").each do |title|
            list4.push(title.text)
          end
          # 表示領域を抜き出してlist5に入れる
          page.doc.xpath("//label[contains(@title, '表示領域')]").each do |title|
            list5.push(title.text)
          end
          # コントラスト比を抜き出してlist6に入れる
          page.doc.xpath("//label[contains(@title, 'コントラスト比')]").each do |title|
            list6.push(title.text)
          end


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
          @parts_lists = list1.zip(list2, list3, list4, list5, list6, list12, list13)
        end
      end
    end

    def save_display
      @parts_lists.each do |parts_list|
        display_list = Display.find_or_initialize_by(item_value: parts_list[7])
        display_list.update_attributes(
          brand:       parts_list[0],
          name:        parts_list[1],
          size:        parts_list[2],
          monitortype: parts_list[3],
          area:        parts_list[4],
          contrast:    parts_list[5],
          pcpart_id:   get_display_id,
          image:       parts_list[6],
          item_value:  parts_list[7]
        )
      end
    end
end
