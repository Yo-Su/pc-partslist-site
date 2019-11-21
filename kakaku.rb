require 'anemone'

Anemone.crawl("https://kakaku.com/specsearch/0510/?st=2&_s=2&DispNonPrice=on&Sort=saledate_desc&DispSaleDate=on&", :depth_limit => 0) do |anemone|
  anemone.on_every_page do |page|
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
    list13 = []

    # メーカー名と製品名はテーブルの同じセルに記載されているため他と処理を分ける

    # メーカー名を抜き出してlist1に入れる
    page.doc.xpath("//td[contains(@class, 'textL')]").each do |title|
      list1.push(title.elements[0].text)
    end

    # 個別IDを抜き出してlist13に入れる
    page.doc.xpath("//input[contains(@value, 'K')]/@value").each do |title|
      list13.push(title.to_s)
    end


    # # 製品名を抜き出してlist2に入れる
    # page.doc.xpath("//td[contains(@class, 'textL')]").each do |title|
    #   list2.push(title.elements[2].text)
    # end

    # # ソケット形状を抜き出してlist3に入れる
    # page.doc.xpath("//label[contains(@title, 'ソケット形状')]").each do |title|
    #   list3.push(title.text)
    # end

    # # コア数を抜き出してlist4に入れる
    # page.doc.xpath("//label[contains(@title, 'コア数')]").each do |title|
    #   list4.push(title.text)
    # end

    # # スレッド数を抜き出してlist5に入れる
    # page.doc.xpath("//label[contains(@title, 'スレッド数')]").each do |title|
    #   list5.push(title.text)
    # end

    # # クロック周波数を抜き出してlist6に入れる
    # page.doc.xpath("//label[contains(@title, 'クロック周波数')]").each do |title|
    #   list6.push(title.text)
    # end

    # # 最大動作クロック周波数を抜き出してlist7に入れる
    # page.doc.xpath("//label[contains(@title, '最大動作クロック周波数')]").each do |title|
    #   list7.push(title.text)
    # end

    # # 二次キャッシュを抜き出してlist8に入れる
    # page.doc.xpath("//label[contains(@title, '二次キャッシュ')]").each do |title|
    #   list8.push(title.text)
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

    # # 画像URLを抜き出してlist12に入れる
    # page.doc.xpath("//img[contains(@src, '.jpg') or contains(@src, 'nowprinting.gif')]/@src").each do |title|
    #   title = "no image" if title.to_s.match(/.gif/)
    #   list12.push(title.to_s)
    # end

    # リスト1~12を結合（各製品毎に配列をまとめる。多重配列になる）
    # list0 = list1.zip(list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12)
    # list0 = list1.zip(list2, list3, list4)
    list0 = list1.zip(list13)
    p list0
    # 多重配列を1行ずつ製品毎に書き出し
    # list0.each do |list|
    #   p list
    # end


  end
end
