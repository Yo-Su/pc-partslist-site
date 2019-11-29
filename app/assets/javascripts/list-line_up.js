$(function(){

  function buildPartsList(partsList){
    var image = partsList.image == "no_image.jpg" ? partsList.image : "aa"
    console.log(partsList.cpu.image);
    var html = `

    <div class="show">
      <div class="partslists__show">
        <div class="partslists__show__box">
          <div class="partslists__content__title__list-name">
            <a href="/users/${partsList.user_id}/parts_lists/${partsList.id}">${partsList.name}</a>
          </div>
        <div class="partslists__content__title__box">
          <a class="partslists__content__title__box__edit" href="/users/${partsList.user_id}/parts_lists/${partsList.id}/edit">リストを編集</a>
          <a class="partslists__content__title__box__delete" rel="nofollow" data-method="delete" href="/users/${partsList.user_id}/parts_lists/${partsList.id}">リストを削除</a>
        </div>
      </div>
    </div>
    <div class="show-list">
    <div class="show-list__head">
    <div class="show-title">CPU</div>
    </div>
    <div class="show-list__head">
    <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.cpu.image}" width="120" height="120"></div>
    <div class="show-image-name">${partsList.cpu.name}</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メーカー</div>
    <div class="show-value">${partsList.cpu.brand}</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">プロセッサー</div>
    <div class="show-value">${partsList.cpu.processor}</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">ソケット形状</div>
    <div class="show-value">${partsList.cpu.socket}</div>
    </div>
    </div>
    <div class="show-list">
    <div class="show-list__head">
    <div class="show-title">マザーボード</div>
    </div>
    <div class="show-list__head">
    <div class="show-image"><img alt="No Image" class="td-image" src="https://img1.kakaku.k-img.com/images/productimage/m/K0001211500.jpg" width="120" height="120"></div>
    <div class="show-image-name">WS C246M PRO/SE</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メーカー</div>
    <div class="show-value">ASUS</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">チップセット</div>
    <div class="show-value">INTELC246</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">フォームファクタ</div>
    <div class="show-value">MicroATX</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">ソケット形状</div>
    <div class="show-value">LGA1151</div>
    </div>
    </div>
    <div class="show-list">
    <div class="show-list__head">
    <div class="show-title">メモリー</div>
    </div>
    <div class="show-list__head">
    <div class="show-image"><img alt="No Image" class="td-image" src="https://img1.kakaku.k-img.com/images/productimage/m/K0001212033.jpg" width="120" height="120"></div>
    <div class="show-image-name">F4-3200C16S-32GVK [DDR4 PC4-25600 32GB 1枚組]</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メーカー</div>
    <div class="show-value">G.Skill</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メモリ容量(1枚あたり)</div>
    <div class="show-value">32GB</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">枚数</div>
    <div class="show-value">1枚</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メモリ規格</div>
    <div class="show-value">DDR4 SDRAM</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メモリインターフェイス</div>
    <div class="show-value">DIMM</div>
    </div>
    </div>
    <div class="show-list">
    <div class="show-list__head">
    <div class="show-title">HDD</div>
    </div>
    <div class="show-list__head">
    <div class="show-image"><img alt="No Image" class="td-image" src="https://images-fe.ssl-images-amazon.com/images/I/41bWLXFfitL._SL160_.jpg" width="120" height="120"></div>
    <div class="show-image-name">WD60EFAX-RT [6TB SATA600 5400]</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メーカー</div>
    <div class="show-value">WESTERN DIGITAL</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">シリーズ</div>
    <div class="show-value">WD Red</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">容量</div>
    <div class="show-value">6TB</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">回転数</div>
    <div class="show-value">5400rpm</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">インターフェイス</div>
    <div class="show-value">Serial ATA</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">インターフェイス</div>
    <div class="show-value">Serial ATA600</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">キャッシュ</div>
    <div class="show-value">256MB</div>
    </div>
    </div>
    <div class="show-list">
    <div class="show-list__head">
    <div class="show-title">SSD</div>
    </div>
    <div class="show-list__head">
    <div class="show-image"><img alt="No Image" class="td-image" src="https://img1.kakaku.k-img.com/images/productimage/m/K0001187448.jpg" width="120" height="120"></div>
    <div class="show-image-name">CG3VZ CSSD-S6M01TCG3VZ</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メーカー</div>
    <div class="show-value">CFD</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">容量</div>
    <div class="show-value">1000GB</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">規格サイズ</div>
    <div class="show-value">2.5インチ</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">インターフェイス</div>
    <div class="show-value">Serial ATA 6Gb/s</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">タイプ</div>
    <div class="show-value">3D NAND TLC(Micron B27A)</div>
    </div>
    </div>
    <div class="show-list">
    <div class="show-list__head">
    <div class="show-title">グラフィックボード</div>
    </div>
    <div class="show-list__head">
    <div class="show-image"><img alt="No Image" class="td-image" src="https://img1.kakaku.k-img.com/images/productimage/m/K0001207971.jpg" width="120" height="120"></div>
    <div class="show-image-name">GeForce RTX 2060 SUPER VENTUS XS J OC [PCIExp 8GB]</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メーカー</div>
    <div class="show-value">MSI</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">搭載チップ</div>
    <div class="show-value">NVIDIAGeForce RTX 2060 SUPER</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">CUDAコア数</div>
    <div class="show-value">2176</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メモリ</div>
    <div class="show-value">GDDR6 8GB</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メモリクロック</div>
    <div class="show-value">14Gbps</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">バスインターフェイス</div>
    <div class="show-value">PCI Express 3.0 x16</div>
    </div>
    </div>
    <div class="show-list">
    <div class="show-list__head">
    <div class="show-title">電源ユニット</div>
    </div>
    <div class="show-list__head">
    <div class="show-image"><img alt="No Image" class="td-image" src="https://img1.kakaku.k-img.com/images/productimage/m/K0001187330.jpg" width="120" height="120"></div>
    <div class="show-image-name">LEADEX III GOLD 650W</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メーカー</div>
    <div class="show-value">SUPER FLOWER</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">対応規格</div>
    <div class="show-value">フォームファクタ：ATX/BTX規格：ATX/EPS</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">電源容量</div>
    <div class="show-value">650W</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">80PLUS認証</div>
    <div class="show-value">Gold</div>
    </div>
    </div>
    <div class="show-list">
    <div class="show-list__head">
    <div class="show-title">PCケース</div>
    </div>
    <div class="show-list__head">
    <div class="show-image"><img alt="No Image" class="td-image" src="https://img1.kakaku.k-img.com/images/productimage/m/K0001207310.jpg" width="120" height="120"></div>
    <div class="show-image-name">IW-103-PGE</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メーカー</div>
    <div class="show-value">IN WIN</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">対応ファクター</div>
    <div class="show-value">ATX MicroATX Mini-ITX</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">重量</div>
    <div class="show-value">7.31kg</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">幅x高さx奥行</div>
    <div class="show-value">227x446x480mm</div>
    </div>
    </div>
    <div class="show-list">
    <div class="show-list__head">
    <div class="show-title">CPUクーラー</div>
    </div>
    <div class="show-list__head">
    <div class="show-image"><img alt="No Image" class="td-image" src="https://img1.kakaku.k-img.com/images/productimage/m/K0001193011.jpg" width="120" height="120"></div>
    <div class="show-image-name">CHIONE E2-120R</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メーカー</div>
    <div class="show-value">GAMDIAS</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">Intel対応ソケット</div>
    <div class="show-value">LGA 2066/2011-3/2011/1151/1150/1155/1156/1366/775</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">AMD対応ソケット</div>
    <div class="show-value">AM4/AM3+/AM3/AM2+/AM2/FM2+/FM2/FM1</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">タイプ</div>
    <div class="show-value">水冷型</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">ノイズレベル</div>
    <div class="show-value">16〜27dBA</div>
    </div>
    </div>
    <div class="show-list">
    <div class="show-list__head">
    <div class="show-title">液晶ディスプレイ</div>
    </div>
    <div class="show-list__head">
    <div class="show-image"><img alt="No Image" class="td-image" src="https://img1.kakaku.k-img.com/images/productimage/m/K0001187131.jpg" width="120" height="120"></div>
    <div class="show-image-name">GH-LCU16A-BK [15.6インチ]</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">メーカー</div>
    <div class="show-value">グリーンハウス</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">モニタサイズ</div>
    <div class="show-value">15.6インチ</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">モニタタイプ</div>
    <div class="show-value">ワイド</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">表示領域</div>
    <div class="show-value">344.16×193.59mm</div>
    </div>
    <div class="show-list__head">
    <div class="show-key">コントラスト比</div>
    <div class="show-value">1000:1</div>
    </div>
    </div>
    <div class="show-space"></div>
    </div>

    `
    return html
  }

  var listval = ""

  $('select').on('change select', function(){
    listval = $(this).val();
    // console.log(listval);
  }).change();

  $('#line-up-button').on('click', function(e){
    e.preventDefault();
    // var formData = new FormData($('#line-up-select').get(0));
    // var select_id = formData

    var path = location.pathname.match(new RegExp(/\/users\/\d+\/parts_lists\//))
    var url = `${path + listval}`
    // var url = location.pathname
    // console.log(url)
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      data: {id: listval}
    })
    .done(function(partsList){
      const html = buildPartsList(partsList)
      $('.shows').append(html);

    })
    .fail(function(partsList){
      console.log("NG");
    })
  })
  




  // var category_id = ""
  // const category = location.href.match(/pcparts\/(\d+)/) ;
  // if (category){
  //   switch (category[1].toString()){
  //     case "1"  : category_id = "cpu_id"; break;
  //     case "2"  : category_id = "mb_id"; break;
  //     case "3"  : category_id = "memory_id"; break;
  //     case "4"  : category_id = "hdd_id"; break;
  //     case "5"  : category_id = "ssd_id"; break;
  //     case "6"  : category_id = "videocard_id"; break;
  //     case "7"  : category_id = "power_id"; break;
  //     case "8"  : category_id = "pccase_id"; break;
  //     case "9"  : category_id = "cpucooler_id"; break;
  //     case "10" : category_id = "display_id"; break;
  //   }
  // }

  // if (category_id){
  //   // フォームにtype="hidden"のinput要素を追加
  //   $('form').append(`<input name=${category_id} type="hidden" value="" />`);

  //   // 各ボタンにはname属性にidを付与している
  //   // ボタンクリック時、type="hidden"のinput要素に自分の値を設定
  //   $('input').click(function(){
  //       $(`input[name=${category_id}]`).val($(this).attr('name'));
  //     });
  // }
});