$(function(){
  // matchメソッドでurlからカテゴリーIDを取得する（パーツカテゴリーページのみ有効）
  var category_id = ""
  const category = location.href.match(/pcparts\/(\d+)/) ;
  if (category){
    switch (category[1].toString()){
      case `${gon.cpu_id}`       : category_id = "cpu_id"; break;
      case `${gon.mb_id}`        : category_id = "mb_id"; break;
      case `${gon.memory_id}`    : category_id = "memory_id"; break;
      case `${gon.hdd_id}`       : category_id = "hdd_id"; break;
      case `${gon.ssd_id}`       : category_id = "ssd_id"; break;
      case `${gon.videocard_id}` : category_id = "videocard_id"; break;
      case `${gon.power_id}`     : category_id = "power_id"; break;
      case `${gon.pccase_id}`    : category_id = "pccase_id"; break;
      case `${gon.cpucooler_id}` : category_id = "cpucooler_id"; break;
      case `${gon.display_id}`   : category_id = "display_id"; break;
    }
  }

  if (category_id){
    // フォームにtype="hidden"のinput要素を追加
    $('form').append(`<input name=${category_id} type="hidden" value="" />`);

    // 各ボタンにはname属性にidを付与している
    // ボタンクリック時、type="hidden"のinput要素に自分の値を設定
    $('input').click(function(){
        $(`input[name=${category_id}]`).val($(this).attr('name'));
      });
  }
});