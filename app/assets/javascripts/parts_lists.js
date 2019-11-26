$(function(){
  // matchメソッドでurlからカテゴリーIDを取得する（パーツカテゴリーページのみ有効）
  var category_id = ""
  const category = location.href.match(/pcparts\/(\d+)/) ;
  if (category){
    switch (category[1].toString()){
      case "1" : category_id = "cpu_id"; break;
      case "2" : category_id = "mb_id"; break;
      case "3" : category_id = "memory_id"; break;
      case "4" : category_id = "hdd_id"; break;
      case "5" : category_id = "ssd_id"; break;
      case "6" : category_id = "videocard_id"; break;
      case "7" : category_id = "power_id"; break;
      case "8" : category_id = "pccase_id"; break;
    }
  }
  // if (category && category[1] == 1){
  //   category_id = "cpu_id"
  // }

  // フォームにtype="hidden"のinput要素を追加
  $('form').append(`<input name=${category_id} type="hidden" value="" />`);

  // 各ボタンにはname属性にidを付与している
  // ボタンクリック時、type="hidden"のinput要素に自分の値を設定
  $('input').click(function(){
      $(`input[name=${category_id}]`).val($(this).attr('name'));
    });
});