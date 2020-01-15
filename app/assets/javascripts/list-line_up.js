$(function(){

  function buildPartsListShowHead(partsList, count){
    var html = `
      <div class="show" data-list-up-id=${count}>
        <div class="partslists__show">
          <div class="partslists__show__box">
            <div class="partslists__content__title__list-name">
              <a href="/users/${partsList.user_id}/parts_lists/${partsList.id}">${partsList.name}</a>
            </div>
          </div>
        </div>
    `
    return html
  }

  function BuildPartsListCpu(partsList){
    const imageUrl = partsList.cpu.image == "no_image.jpg" ? image_path(partsList.cpu.image) : partsList.cpu.image
    var html = `
    <div class="show-list">
      <div class="show-list__head">
        <div class="show-title">CPU</div>
      </div>
      <div class="show-list__head">
        <div class="show-image"><img alt="No Image" class="td-image" src="${imageUrl}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.cpu.name}</div>
        </div>
      </div>
        <div class="show-list__head">
          <div class="show-key-box">
            <div class="show-key-content">メーカー</div>
          </div>
          <div class="show-value-box">
            <div class="show-value-content">${partsList.cpu.brand}</div>
          </div>
        </div>
      <div class="show-list__head">
        <div class="show-key-box">
          <div class="show-key-content">プロセッサー</div>
        </div>
        <div class="show-value-box">
          <div class="show-value-content">${partsList.cpu.processor}</div>
        </div>
      </div>
      <div class="show-list__head">
        <div class="show-key-box">
          <div class="show-key-content">ソケット形状</div>
        </div>
        <div class="show-value-box">
          <div class="show-value-content">${partsList.cpu.socket}</div>
        </div>
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
          <div class="show-key-box">
            <div class="show-key-content">メーカー</div>
          </div>
          <div class="show-value-box">
            <div class="show-value-content"></div>
          </div>
        </div>
      <div class="show-list__head">
        <div class="show-key-box">
          <div class="show-key-content">プロセッサー</div>
        </div>
        <div class="show-value-box">
          <div class="show-value-content"></div>
        </div>
      </div>
      <div class="show-list__head">
        <div class="show-key-box">
          <div class="show-key-content">ソケット形状</div>
        </div>
        <div class="show-value-box">
          <div class="show-value-content"></div>
        </div>
      </div>
    </div>
    `
    return html
  }

  function buildPartsListMb(partsList){
    const imageUrl = partsList.mb.image == "no_image.jpg" ? image_path(partsList.mb.image) : partsList.mb.image
    var html = `
      <div class="show-list">
        <div class="show-list__head">
        <div class="show-title">マザーボード</div>
        </div>
        <div class="show-list__head">
          <div class="show-image"><img alt="No Image" class="td-image" src="${imageUrl}" width="120" height="120"></div>
          <div class="show-image-name-box">
            <div class="show-image-name-content">${partsList.mb.name}</div>
          </div>
        </div>
        <div class="show-list__head">
          <div class="show-key-box">
            <div class="show-key-content">メーカー</div>
          </div>
          <div class="show-value-box">
            <div class="show-value-content">${partsList.mb.brand}</div>
          </div>
        </div>
        <div class="show-list__head">
          <div class="show-key-box">
            <div class="show-key-content">チップセット</div>
          </div>
          <div class="show-value-box">
            <div class="show-value-content">${partsList.mb.chipset}</div>
          </div>
        </div>
        <div class="show-list__head">
          <div class="show-key-box">
            <div class="show-key-content">フォームファクタ</div>
          </div>
          <div class="show-value-box">
            <div class="show-value-content">${partsList.mb.formfactor}</div>
          </div>
        </div>
        <div class="show-list__head">
          <div class="show-key-box">
            <div class="show-key-content">ソケット形状</div>
          </div>
          <div class="show-value-box">
            <div class="show-value-content">${partsList.mb.socket}</div>
          </div>
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
          <div class="show-key-box">
            <div class="show-key-content"></div>
          </div>
          <div class="show-value-box">
            <div class="show-value-content"></div>
          </div>
        </div>
        <div class="show-list__head">
          <div class="show-key-box">
            <div class="show-key-content"></div>
          </div>
          <div class="show-value-box">
            <div class="show-value-content"></div>
          </div>
        </div>
        <div class="show-list__head">
          <div class="show-key-box">
            <div class="show-key-content"></div>
          </div>
          <div class="show-value-box">
            <div class="show-value-content"></div>
          </div>
        </div>
        <div class="show-list__head">
          <div class="show-key-box">
            <div class="show-key-content"></div>
          </div>
          <div class="show-value-box">
            <div class="show-value-content"></div>
          </div>
        </div>
      </div>
    `
    return html
  }

  function buildPartsListMemory(partsList){
    const imageUrl = partsList.memory.image == "no_image.jpg" ? image_path(partsList.memory.image) : partsList.memory.image
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">メモリー</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${imageUrl}" width="120" height="120"></div>
      <div class="show-image-name-box">
        <div class="show-image-name-content">${partsList.memory.name}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メーカー</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.memory.brand}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メモリ容量(1枚あたり)</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.memory.capacity}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">枚数</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.memory.setnumber}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メモリ規格</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.memory.standard}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メモリインターフェイス</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.memory.interface}</div>
      </div>
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
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListHdd(partsList){
    const imageUrl = partsList.hdd.image == "no_image.jpg" ? image_path(partsList.hdd.image) : partsList.hdd.image
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">HDD</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${imageUrl}" width="120" height="120"></div>
      <div class="show-image-name-box">
      <div class="show-image-name-content">${partsList.hdd.name}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メーカー</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.hdd.brand}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">シリーズ</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.hdd.series}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">容量</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.hdd.capacity}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">回転数</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.hdd.speed}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">インターフェイス</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.hdd.interface1}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">インターフェイス</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.hdd.interface2}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">キャッシュ</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.hdd.cache}</div>
      </div>
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
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListSsd(partsList){
    const imageUrl = partsList.ssd.image == "no_image.jpg" ? image_path(partsList.ssd.image) : partsList.ssd.image
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">SSD</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${imageUrl}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.ssd.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メーカー</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.ssd.brand}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">容量</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.ssd.capacity}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">規格サイズ</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.ssd.size}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">インターフェイス</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.ssd.interface}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">タイプ</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.ssd.ssdtype}</div>
      </div>
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
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListVideocard(partsList){
    const imageUrl = partsList.videocard.image == "no_image.jpg" ? image_path(partsList.videocard.image) : partsList.videocard.image
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">グラフィックボード</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${imageUrl}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.videocard.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メーカー</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.videocard.brand}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">搭載チップ</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.videocard.chip}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">CUDAコア数</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.videocard.core}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メモリ</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.videocard.memory}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メモリクロック</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.videocard.clock}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">バスインターフェイス</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.videocard.interface}</div>
      </div>
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
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListPower(partsList){
    const imageUrl = partsList.power.image == "no_image.jpg" ? image_path(partsList.power.image) : partsList.power.image
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">電源ユニット</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${imageUrl}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.power.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メーカー</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.power.brand}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">対応規格</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.power.standard}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">電源容量</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.power.capacity}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">80PLUS認証</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.power.plus}</div>
      </div>
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
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListPccase(partsList){
    const imageUrl = partsList.pccase.image == "no_image.jpg" ? image_path(partsList.pccase.image) : partsList.pccase.image
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">PCケース</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${imageUrl}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.pccase.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メーカー</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.pccase.brand}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">対応ファクター</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.pccase.factor}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">重量</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.pccase.weight}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">幅x高さx奥行</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.pccase.size_wdh}</div>
      </div>
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
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListCpucooler(partsList){
    const imageUrl = partsList.cpucooler.image == "no_image.jpg" ? image_path(partsList.cpucooler.image) : partsList.cpucooler.image
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">CPUクーラー</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${imageUrl}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.cpucooler.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メーカー</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.cpucooler.brand}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">Intel対応ソケット</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.cpucooler.intel}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">AMD対応ソケット</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.cpucooler.amd}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">タイプ</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.cpucooler.flowtype}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">ノイズレベル</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.cpucooler.noise}</div>
      </div>
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
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      </div>
    `
    return html
  }

  function buildPartsListDisplay(partsList){
    const imageUrl = partsList.display.image == "no_image.jpg" ? image_path(partsList.display.image) : partsList.display.image
    var html = `
      <div class="show-list">
      <div class="show-list__head">
      <div class="show-title">液晶ディスプレイ</div>
      </div>
      <div class="show-list__head">
      <div class="show-image"><img alt="No Image" class="td-image" src="${imageUrl}" width="120" height="120"></div>
        <div class="show-image-name-box">
          <div class="show-image-name-content">${partsList.display.name}</div>
        </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">メーカー</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.display.brand}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">モニタサイズ</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.display.size}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">モニタタイプ</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.display.monitortype}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">表示領域</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.display.area}</div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content">コントラスト比</div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content">${partsList.display.contrast}</div>
      </div>
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
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
      </div>
      <div class="show-list__head">
      <div class="show-key-box">
      <div class="show-key-content"></div>
      </div>
      <div class="show-value-box">
      <div class="show-value-content"></div>
      </div>
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
  var count = 0

  // パーツリスト切替セレクトボックスの初期値を取得
  $('select').on('change select', function(){
    listval = $(this).val();
  }).change();

  // ページ読み込み時(リストが1つの時)、空のテーブルを隠す
  $(document).ready(function(){
    $('.show-image-name-content').each(function(index, element){
      var divdiv = $(this).parents('.show-list')
      if ($(element).text() == ""){
        $(divdiv).css({
          'display': 'none'
        })
      };
    })
  });

  // 「パーツリストを追加」ボタンを押したら発火してリストを並べる
  $('#line-up-button').on('click', function(e){
    e.preventDefault();
    var path = location.pathname.match(new RegExp(/\/users\/\d+\/parts_lists\//))
    var url = `${path + listval}`

    // リスト追加時に既存のリストを消すためのdata取得
    var listUpId1 = $('.show').attr("data-list-up-id");
    var listUpId2 = $('.show:last').attr("data-list-up-id");
    count += 1
    var chooseId = $('#choose_list').prop("checked")
    // ----------------------------------------

    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      data: {id: listval}
    })
    .done(function(partsList){
      let html = buildPartsListShowHead(partsList, count);
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

      // 隠しているリストのCSSを変更
      if (listUpId1 == listUpId2){
        $('.show-image-name-content').each(function(index, element){
          var divdiv = $(this).parents('.show-list')
          if ($(element).text() == ""){
            $(divdiv).css({
              'display': '',
              'visibility': 'hidden'
            })
          };
        })
      }

      // リスト削除
      if (listUpId1 != listUpId2){
        chooseId ? $('.show:last').remove() : $('.show:first').remove()
      }
      // リスト追加
      chooseId ? $('.shows').append(html) : $('.shows').prepend(html);
      // 幅50%
      $('.show').css({
        'width': '50%'
      });

    })
    .fail(function(){
      console.log("NG");
    })
  })
});