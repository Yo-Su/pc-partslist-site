$(function(){
  // matchメソッドでurlからカテゴリーIDを取得する（パーツカテゴリーページのみ有効）
  var category_id = ""
  const category = location.href.match(/pcparts\/(\d+)/) ;
  if (category){
    switch (category[1].toString()){
      case "1" : category_id = "cpu_id"; break;
      case "2" : category_id = "mb_id"; break;
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