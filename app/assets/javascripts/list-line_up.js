$(function(){

  function buildPartsListShowHead(partsList){
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
    `
    return html
  }

  function BuildPartsListCpu(partsList){
    var html = `
    <div class="show-list">
      <div class="show-list__head">
        <div class="show-title">CPU</div>
      </div>
      <div class="show-list__head">
        <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.cpu.image}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.cpu.name}</div>
        </div>
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
    `
    return html
  }

  function HiddenCpu(){
    var html = `
    <div class="show-list hidden">
      <div class="show-list__head">
        <div class="show-title">CPU</div>
      </div>
      <div class="show-list__head">
        <div class="show-image"><img alt="No Image" class="td-image" src="https://placehold.jp/150x150.png" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content"></div>
        </div>
      </div>
        <div class="show-list__head">
          <div class="show-key">メーカー</div>
          <div class="show-value"></div>
        </div>
      <div class="show-list__head">
        <div class="show-key">プロセッサー</div>
        <div class="show-value"></div>
      </div>
      <div class="show-list__head">
        <div class="show-key">ソケット形状</div>
        <div class="show-value"></div>
      </div>
    </div>
    `
    return html
  }

  function buildPartsListMb(partsList){
    var html = `
      <div class="show-list">
        <div class="show-list__head">
        <div class="show-title">マザーボード</div>
        </div>
        <div class="show-list__head">
          <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.mb.image}" width="120" height="120"></div>
          <div class="show-image-name-box">
            <div class="show-image-name-content">${partsList.mb.name}</div>
          </div>
        </div>
        <div class="show-list__head">
          <div class="show-key">メーカー</div>
          <div class="show-value">${partsList.mb.brand}</div>
        </div>
        <div class="show-list__head">
          <div class="show-key">チップセット</div>
          <div class="show-value">${partsList.mb.chipset}</div>
        </div>
        <div class="show-list__head">
          <div class="show-key">フォームファクタ</div>
          <div class="show-value">${partsList.mb.formfactor}</div>
        </div>
        <div class="show-list__head">
          <div class="show-key">ソケット形状</div>
          <div class="show-value">${partsList.mb.socket}</div>
        </div>
      </div>
    `
    return html
  }

  function HiddenMb(){
    var html = `
      <div class="show-list hidden">
        <div class="show-list__head">
        <div class="show-title">マザーボード</div>
        </div>
        <div class="show-list__head">
          <div class="show-image"><img alt="No Image" class="td-image" src="https://placehold.jp/150x150.png" width="120" height="120"></div>
          <div class="show-image-name-box">
            <div class="show-image-name-content"></div>
          </div>
        </div>
        <div class="show-list__head">
          <div class="show-key">メーカー</div>
          <div class="show-value"></div>
        </div>
        <div class="show-list__head">
          <div class="show-key">チップセット</div>
          <div class="show-value"></div>
        </div>
        <div class="show-list__head">
          <div class="show-key">フォームファクタ</div>
          <div class="show-value"></div>
        </div>
        <div class="show-list__head">
          <div class="show-key">ソケット形状</div>
          <div class="show-value"></div>
        </div>
      </div>
    `
    return html
  }

  function buildPartsListMemory(partsList){
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">メモリー</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.memory.image}" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content">${partsList.memory.name}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value">${partsList.memory.brand}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メモリ容量(1枚あたり)</div>
      <div class="show-value">${partsList.memory.capacity}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">枚数</div>
      <div class="show-value">${partsList.memory.setnumber}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メモリ規格</div>
      <div class="show-value">${partsList.memory.standard}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メモリインターフェイス</div>
      <div class="show-value">${partsList.memory.interface}</div>
      </div>
      </div>
    `
    return html
  }

  function HiddenMemory(){
    var html = `
      <div class="show-list hidden">
      <div class="show-list__head">
      <div class="show-title">メモリー</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="https://placehold.jp/150x150.png" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メモリ容量(1枚あたり)</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">枚数</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メモリ規格</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メモリインターフェイス</div>
      <div class="show-value"></div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListHdd(partsList){
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">HDD</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.hdd.image}" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content">${partsList.hdd.name}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value">${partsList.hdd.brand}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">シリーズ</div>
      <div class="show-value">${partsList.hdd.series}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">容量</div>
      <div class="show-value">${partsList.hdd.capacity}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">回転数</div>
      <div class="show-value">${partsList.hdd.speed}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">インターフェイス</div>
      <div class="show-value">${partsList.hdd.interface1}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">インターフェイス</div>
      <div class="show-value">${partsList.hdd.interface2}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">キャッシュ</div>
      <div class="show-value">${partsList.hdd.cache}</div>
      </div>
      </div>
    `
    return html
  }

  function HiddenHdd(){
    var html = `
      <div class="show-list hidden">
      <div class="show-list__head">
      <div class="show-title">HDD</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="https://placehold.jp/150x150.png" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">シリーズ</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">容量</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">回転数</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">インターフェイス</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">インターフェイス</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">キャッシュ</div>
      <div class="show-value"></div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListSsd(partsList){
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">SSD</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.ssd.image}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.ssd.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value">${partsList.ssd.brand}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">容量</div>
      <div class="show-value">${partsList.ssd.capacity}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">規格サイズ</div>
      <div class="show-value">${partsList.ssd.size}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">インターフェイス</div>
      <div class="show-value">${partsList.ssd.interface}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">タイプ</div>
      <div class="show-value">${partsList.ssd.ssdtype}</div>
      </div>
      </div>
    `
    return html
  }

  function HiddenSsd(){
    var html = `
      <div class="show-list hidden">
      <div class="show-list__head">
      <div class="show-title">SSD</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="https://placehold.jp/150x150.png" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">容量</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">規格サイズ</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">インターフェイス</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">タイプ</div>
      <div class="show-value"></div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListVideocard(partsList){
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">グラフィックボード</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.videocard.image}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.videocard.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value">${partsList.videocard.brand}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">搭載チップ</div>
      <div class="show-value">${partsList.videocard.chip}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">CUDAコア数</div>
      <div class="show-value">${partsList.videocard.core}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メモリ</div>
      <div class="show-value">${partsList.videocard.memory}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メモリクロック</div>
      <div class="show-value">${partsList.videocard.clock}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">バスインターフェイス</div>
      <div class="show-value">${partsList.videocard.interface}</div>
      </div>
      </div>
    `
    return html
  }

  function HiddenVideocard(){
    var html = `
      <div class="show-list hidden">
      <div class="show-list__head">
      <div class="show-title">グラフィックボード</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="https://placehold.jp/150x150.png" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">搭載チップ</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">CUDAコア数</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メモリ</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メモリクロック</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">バスインターフェイス</div>
      <div class="show-value"></div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListPower(partsList){
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">電源ユニット</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.power.image}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.power.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value">${partsList.power.brand}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">対応規格</div>
      <div class="show-value">${partsList.power.standard}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">電源容量</div>
      <div class="show-value">${partsList.power.capacity}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">80PLUS認証</div>
      <div class="show-value">${partsList.power.plus}</div>
      </div>
      </div>
    `
    return html
  }

  function HiddenPower(){
    var html = `
      <div class="show-list hidden">
      <div class="show-list__head">
      <div class="show-title">電源ユニット</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="https://placehold.jp/150x150.png" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">対応規格</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">電源容量</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">80PLUS認証</div>
      <div class="show-value"></div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListPccase(partsList){
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">PCケース</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.pccase.image}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.pccase.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value">${partsList.pccase.brand}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">対応ファクター</div>
      <div class="show-value">${partsList.pccase.factor}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">重量</div>
      <div class="show-value">${partsList.pccase.weight}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">幅x高さx奥行</div>
      <div class="show-value">${partsList.pccase.size_wdh}</div>
      </div>
      </div>
    `
    return html
  }

  function HiddenPccase(){
    var html = `
      <div class="show-list hidden">
      <div class="show-list__head">
      <div class="show-title">PCケース</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="https://placehold.jp/150x150.png" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">対応ファクター</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">重量</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">幅x高さx奥行</div>
      <div class="show-value"></div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListCpucooler(partsList){
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">CPUクーラー</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.cpucooler.image}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.cpucooler.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value">${partsList.cpucooler.brand}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">Intel対応ソケット</div>
      <div class="show-value">${partsList.cpucooler.intel}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">AMD対応ソケット</div>
      <div class="show-value">${partsList.cpucooler.amd}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">タイプ</div>
      <div class="show-value">${partsList.cpucooler.flowtype}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">ノイズレベル</div>
      <div class="show-value">${partsList.cpucooler.noise}</div>
      </div>
      </div>
    `
    return html
  }

  function HiddenCpucooler(){
    var html = `
      <div class="show-list hidden">
      <div class="show-list__head">
      <div class="show-title">CPUクーラー</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="https://placehold.jp/150x150.png" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">Intel対応ソケット</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">AMD対応ソケット</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">タイプ</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">ノイズレベル</div>
      <div class="show-value"></div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListDisplay(partsList){
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">液晶ディスプレイ</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${partsList.display.image}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.display.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value">${partsList.display.brand}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">モニタサイズ</div>
      <div class="show-value">${partsList.display.size}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">モニタタイプ</div>
      <div class="show-value">${partsList.display.monitortype}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">表示領域</div>
      <div class="show-value">${partsList.display.area}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">コントラスト比</div>
      <div class="show-value">${partsList.display.contrast}/div>
      </div>
      </div>
    `
    return html
  }

  function HiddenDisplay(){
    var html = `
      <div class="show-list hidden">
      <div class="show-list__head">
      <div class="show-title">液晶ディスプレイ</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="https://placehold.jp/150x150.png" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key">メーカー</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">モニタサイズ</div>
      <div class="show-value">partsList.display.size}</div>
      </div>
      <div class="show-list__head">
      <div class="show-key">モニタタイプ</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">表示領域</div>
      <div class="show-value"></div>
      </div>
      <div class="show-list__head">
      <div class="show-key">コントラスト比</div>
      <div class="show-value">/div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListShowFoot(){
    var html = `
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
      let html = buildPartsListShowHead(partsList);
      html += partsList.cpu ? BuildPartsListCpu(partsList) : HiddenCpu();
      html += partsList.mb ? buildPartsListMb(partsList) : HiddenMb();
      html += partsList.memory ? buildPartsListMemory(partsList) : HiddenMemory();
      html += partsList.hdd ? buildPartsListHdd(partsList) : HiddenHdd();
      html += partsList.ssd ? buildPartsListSsd(partsList) : HiddenSsd();
      html += partsList.videocard ? buildPartsListVideocard(partsList) : HiddenVideocard();
      html += partsList.power ? buildPartsListPower(partsList) : HiddenPower();
      html += partsList.pccase ? buildPartsListPccase(partsList) : HiddenPccase();
      html += partsList.cpucooler ? buildPartsListCpucooler(partsList) : HiddenCpucooler();
      html += partsList.display ? buildPartsListDisplay(partsList) : HiddenDisplay();
      html += buildPartsListShowFoot();
      $('.shows').append(html);

      $('.show').css({
        'width': '50%'
      });
    })
    .fail(function(){
      console.log("NG");
    })
  })
});