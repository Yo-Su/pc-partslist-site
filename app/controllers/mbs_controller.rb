class MbsController < ApplicationController

  def create
    @parts_lists = []
    get_motherboard
    save_motherboard
    redirect_to pcpart_path(2)
  end

  private
    require "anemone"

    def get_motherboard
      list1  = [] #["メーカー名"]
      list2  = [] #["製品名"]
      list3  = [] #["ソケット形状"]
      list4  = [] #["コア数"]
      list5  = [] #["スレッド数"]
      list6  = [] #["クロック周波数"]
      list7  = [] #["最大動作クロック周波数"]
      list8  = [] #["二次キャッシュ"]
      list9  = [] #["三次キャッシュ"]
      list10 = [] #["マルチスレッド"]
      list11 = [] #["TDP"]
      list12 = [] #["画像"]
      list13 = [] #["個別ID"]
      Anemone.crawl("https://kakaku.com/specsearch/0540/?st=2&_s=2&Sort=saledate_desc&DispSaleDate=on&", :depth_limit => 0) do |anemone|
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
          # チップセットを抜き出してlist3に入れる
          page.doc.xpath("//label[contains(@title, 'チップセット')]").each do |title|
            list3.push(title.text)
          end
          # フォームファクタを抜き出してlist4に入れる
          page.doc.xpath("//label[contains(@title, 'フォームファクタ')]").each do |title|
            list4.push(title.text)
          end
          # CPUソケットを抜き出してlist5に入れる
          page.doc.xpath("//label[contains(@title, 'CPUソケット')]").each do |title|
            list5.push(title.text)
          end

          # # 詳細メモリタイプを抜き出してlist6に入れる
          # page.doc.xpath("//label[contains(@title, '詳細メモリタイプ')]").each do |title|
          #   list6.push(title.text)
          # end
          # # メモリスロット数を抜き出してlist7に入れる
          # page.doc.xpath("//label[contains(@title, 'メモリスロット数')]").each do |title|
          #   list7.push(title.text)
          # end
          # # 最大メモリー容量を抜き出してlist8に入れる
          # page.doc.xpath("//label[contains(@title, '最大メモリー容量')]").each do |title|
          #   list8.push(title.text)

          # 以下未編集==================================================================================
          # end
          # # 三次キャッシュを抜き出してlist9に入れる
          # page.doc.xpath("//label[contains(@title, '三次キャッシュ')]").each do |title|
          #   list9.push(title.text)
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
            title = "no image" if title.to_s.match(/.gif/)
            list12.push(title.to_s)
          end
          # 個別IDを抜き出してlist13に入れる
          page.doc.xpath("//input[contains(@value, 'K')]/@value").each do |title|
            list13.push(title.to_s)
          end

          # リスト1~13を結合（各製品毎に配列をまとめる。多重配列になる）
          # list0 = list1.zip(list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13)
          @parts_lists = list1.zip(list2, list3, list4, list5, list12, list13)
        end
      end
    end

    def save_motherboard
      @parts_lists.each do |parts_list|
        motherboard_list = Mb.find_or_initialize_by(item_value: parts_list[6])
        motherboard_list.update_attributes(
          name: parts_list[1],
          brand: parts_list[0],
          chipset: parts_list[2],
          formfactor: parts_list[3],
          socket: parts_list[4],
          image: parts_list[5],
          pcpart_id: 2,
          item_value: parts_list[6]
        )
      end
    end
end
