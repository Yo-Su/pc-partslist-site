<img src="https://user-images.githubusercontent.com/57243991/71813359-bcef3680-30bc-11ea-8b8c-dbeed9411a26.png" width=900px>

<h1 align="center">PC Partslist Site</h1>

<p align="center">
<a href="https://www.ruby-lang.org/ja/"><img src="https://user-images.githubusercontent.com/39142850/71774533-1ddf1780-2fb4-11ea-8560-753bed352838.png" width="70px;" /></a>　
<a href="https://rubyonrails.org/"><img src="https://user-images.githubusercontent.com/39142850/71774548-731b2900-2fb4-11ea-99ba-565546c5acb4.png" height="60px;" /></a>　
<a href="http://haml.info/"><img src="https://user-images.githubusercontent.com/39142850/71774618-b32edb80-2fb5-11ea-9050-d5929a49e9a5.png" height="60px;" /></a>　
<a href="https://sass-lang.com/"><img src="https://user-images.githubusercontent.com/39142850/71774644-115bbe80-2fb6-11ea-822c-568eabde5228.png" height="60px" /></a><br>
<a href="https://jquery.com/"><img src="https://user-images.githubusercontent.com/39142850/71774768-d064a980-2fb7-11ea-88ad-4562c59470ae.png" height="65px;" /></a>　
<a href="https://www.mysql.com/jp/"><img src="https://user-images.githubusercontent.com/57243991/71816088-d98f6c80-30c4-11ea-82ee-f6b2892df607.png" height="60px;" /></a>　
<a href="https://jp.heroku.com/"><img src="https://user-images.githubusercontent.com/57243991/71815817-07c07c80-30c4-11ea-8fa8-fa5048404d1b.png" height="80px;" /></a>
</p>


# 🌐 URL
### **<https://pc-partslist-site.herokuapp.com/>**
<br>

# 📝 このアプリについて
自作パソコンのパーツリストの作成＆リストの比較ができるサイトです
- ユーザーを登録してパーツリストを保存できます
- パーツリストを作成できます
- パーツリストにパソコンのパーツを登録できます
- 作成したパーツリストを並べて比較できます
<br>

# 📜 制作背景
自作パソコンの構成を考える際、「自作するパソコンはどの位のスペックにするか」「どのメーカーのパーツを使うか」等を考慮して複数の構成を考える事があると思います。  
そうして考えた構成(=パーツリスト)を簡単に作成して、比較できたら便利ではないかと思い、パーツリストの作成＆比較サイトである「PC Partslist Site」を制作しました。

<br>

# 📕 機能紹介
## ・ユーザー登録
<img src="https://user-images.githubusercontent.com/57243991/71866024-354f0980-3148-11ea-9500-82c8ccc722ac.gif" width=900px>
<br>

## ・パーツリスト作成
<img src="https://user-images.githubusercontent.com/57243991/71866025-354f0980-3148-11ea-9aa3-162e3951daf7.gif" width=900px>
<br>

## ・パーツリスト登録
<img src="https://user-images.githubusercontent.com/57243991/71866026-354f0980-3148-11ea-9a76-98ea63446431.gif" width=900px>
<br>

## ・パーツリスト比較
<img src="https://user-images.githubusercontent.com/57243991/71866028-35e7a000-3148-11ea-8b9e-ea20d49b012c.gif" width=900px>
<br>


# 📊 PC Partslist Siteデータベース設計
## pcpartsテーブル(PCパーツカテゴリー)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|category|string||カテゴリー名|

### Association
- has_many :cpus
- has_many :motherboards
- has_many :memories
- has_many :hdds
- has_many :ssds
- has_many :videocards
- has_many :powers
- has_many :pccases
- has_many :cpucoolers
- has_many :displays


## usersテーブル(ユーザー)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|email|string|null: false, unique: true|メールアドレス|
|password|string|null: false|パスワード|
|name|string|null: false|ユーザー名|

### Association
- has_many :parts_lists


## parts_listsテーブル(パーツリスト)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string|null: false|リスト名|
|public_private|boolean|null: false|公開・非公開設定|
|user_id|references|null: false, foreign_key: true|ユーザーID|
|cpu_id|references|foreign_key: true|CPU ID|
|motherboard_id|references|foreign_key: true|マザーボード ID|
|memory_id|references|foreign_key: true|メモリー ID|
|hdd_id|references|foreign_key: true|HDD ID|
|ssd_id|references|foreign_key: true|SSD ID|
|videocard_id|references|foreign_key: true|グラフィックボード ID|
|power_id|references|foreign_key: true|電源ユニット ID|
|pccase_id|references|foreign_key: true|PCケース ID|
|cpucooler_id|references|foreign_key: true|CPUクーラー ID|
|display_id|references|foreign_key: true|液晶ディスプレイ ID|

### Association
- belongs_to :user
- belongs_to :cpu
- belongs_to :motherboard
- belongs_to :memory
- belongs_to :hdd
- belongs_to :ssd
- belongs_to :videocard
- belongs_to :power
- belongs_to :pccase
- belongs_to :cpucooler
- belongs_to :display


## cpusテーブル(CPU)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string||品名|
|brand|string||メーカー|
|processor|string||プロセッサー|
|socket|string||ソケット形状|
|item_value|string||品番(スクレイピング用)|
|image|string||画像|
|pcpart_id|references|foreign_key: true|カテゴリーID|

### Association
- belongs_to :pcpart
- has_many :parts_lists


## motherboardsテーブル(マザーボード)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string||品名|
|brand|string||メーカー|
|chipset|string||チップセット|
|formfactor|string||フォームファクタ|
|socket|string||ソケット形状|
|item_value|string||品番(スクレイピング用)|
|image|string||画像|
|pcpart_id|references|foreign_key: true|カテゴリーID|

### Association
- belongs_to :pcpart
- has_many :parts_lists


## memoriesテーブル(メモリー)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string||品名|
|brand|string||メーカー|
|capacity|string||メモリ容量|
|setnumber|string||枚数|
|standard|string||メモリ規格|
|interface|string||メモリインターフェース|
|item_value|string||品番(スクレイピング用)|
|image|string||画像|
|pcpart_id|references|foreign_key: true|カテゴリーID|

### Association
- belongs_to :pcpart
- has_many :parts_lists


## hddsテーブル(HDD)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string||品名|
|brand|string||メーカー|
|series|string||シリーズ|
|capacity|string||容量|
|speed|string||回転数|
|interface1|string||インターフェイス|
|interface2|string||インターフェイス|
|cache|string||キャッシュ|
|item_value|string||品番(スクレイピング用)|
|image|string||画像|
|pcpart_id|references|foreign_key: true|カテゴリーID|

### Association
- belongs_to :pcpart
- has_many :parts_lists


## ssdsテーブル(SSD)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string||品名|
|brand|string||メーカー|
|capacity|string||容量|
|size|string||規格サイズ|
|interface|string||インターフェイス|
|ssdtype|string||タイプ|
|item_value|string||品番(スクレイピング用)|
|image|string||画像|
|pcpart_id|references|foreign_key: true|カテゴリーID|

### Association
- belongs_to :pcpart
- has_many :parts_lists


## videocardsテーブル(グラフィックボード)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string||品名|
|brand|string||メーカー|
|chip|string||搭載チップ|
|core|string||CUDAコア数|
|memory|string||メモリ|
|clock|string||メモリクロック|
|interface|string||バスインターフェイス|
|item_value|string||品番(スクレイピング用)|
|image|string||画像|
|pcpart_id|references|foreign_key: true|カテゴリーID|

### Association
- belongs_to :pcpart
- has_many :parts_lists


## powersテーブル(電源ユニット)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string||品名|
|brand|string||メーカー|
|standard|string||対応規格|
|capacity|string||電源容量|
|plus|string||80PLUS認証|
|item_value|string||品番(スクレイピング用)|
|image|string||画像|
|pcpart_id|references|foreign_key: true|カテゴリーID|

### Association
- belongs_to :pcpart
- has_many :parts_lists


## pccasesテーブル(PCケース)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string||品名|
|brand|string||メーカー|
|factor|string||対応ファクター|
|weight|string||重量|
|size_wdh|string||幅×高さ×奥行|
|item_value|string||品番(スクレイピング用)|
|image|string||画像|
|pcpart_id|references|foreign_key: true|カテゴリーID|

### Association
- belongs_to :pcpart
- has_many :parts_lists


## cpucoolersテーブル(CPUクーラー)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string||品名|
|brand|string||メーカー|
|intel|string||Intel対応ソケット|
|amd|string||AMD対応ソケット|
|flowtype|string||タイプ|
|noise|string||ノイズレベル|
|item_value|string||品番(スクレイピング用)|
|image|string||画像|
|pcpart_id|references|foreign_key: true|カテゴリーID|

### Association
- belongs_to :pcpart
- has_many :parts_lists


## displaysテーブル(液晶ディスプレイ)
|Column|Type|Options|supplement|
|------|----|-------|----------|
|name|string||品名|
|brand|string||メーカー|
|size|string||モニタサイズ|
|monitortype|string||モニタタイプ|
|area|string||表示領域|
|contrast|string||コントラスト比|
|item_value|string||品番(スクレイピング用)|
|image|string||画像|
|pcpart_id|references|foreign_key: true|カテゴリーID|

### Association
- belongs_to :pcpart
- has_many :parts_lists

<img src="https://user-images.githubusercontent.com/57243991/72076445-e0beb080-3338-11ea-9bb5-2227022220d8.png" width=900px>
