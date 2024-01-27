## 1:ワイヤーフレームの選定

- https://v2.vuetifyjs.com/en/getting-started/wireframes/
- Base バージョンで決定、右下オクトキャットをクリック　https://v2.vuetifyjs.com/en/examples/wireframes/base/
- ソースコードを取得、コピー
- **src/App.vue**にペースト、動作確認

## 2:左ナビゲーションメニューの設定

- https://v2.vuetifyjs.com/en/components/navigation-drawers/#usage
- <>マークより一部(v-card タグの中身だけ)をコピー
- **src/App.vue(テキスト編集)**
  - 途中 v-navigation-drawer タグにペースト修正する
  - ペーストのタグ内の permanent を削除
  - v-navigation-drawer の後ろに、v-model="drawer" app を追加(ナビゲーションが表示非表示される)
  - items の not defined エラーを解消するべく定義するには
  - items を script の data 内で定義するため
  - vuer<>コードの script、items の配列部分をコピーhttps://v2.vuetifyjs.com/en/components/navigation-drawers/#usage
  - ナビ items, title, subtitle のテキストを編集
- **src/router/index.js(遷移先コード確認)**
  - ナビカテゴリのリンク先を設定するにはまず、
  - const routes の path は URL を、component はファイル名を表していることを確認
  - /about を追加しても表示がされないので
  - デフォルトのアプリケーションマークアップ設定方法をサイトで確認 ui/application https://v2.vuetifyjs.com/ja/components/application/#section-30c730d530a930eb30c8306e30a230d730ea30b130fc30b730e730f330de30fc30af30a230c330d7
  - if using vue-router をチェックし v-main タグ内で router-view タブが必要なことを確認
- **src/App.vue(遷移設定編集)**
  - v-main タグ内に router-view を記述すると
  - views ディレクトリ内の.vue を router ディレクトリの index.js を経由し,components ディレクトリ内のファイルも読み込み、描画される。
  - URL に/about を追加して描画エラーがなければ
  - リンクを設定するには List で設定されているので
  - ui/Lists をサイト API v-list ー item で確認　https://v2.vuetifyjs.com/en/api/v-list-item/#props
  - to が適している事を確認（詳細に遷移するリンクの props）
  - ファイルの v-list-item タグの内容に関係しているので
  - ファイル内 script タグの items の配列内に to を追加することで遷移が可能になる。to: '/about'など他も記述
  - 遷移を可能にするために、v-list-item にまだ設定する
  - v-list-item v-for の部分の:key の下に:to を追加する
- **src/App.vue(アイコン編集 Todo)**
  - ui/icons https://v2.vuetifyjs.com/en/components/icons/
  - のテキスト部分 MaterialDesignIcons をクリック
    https://pictogrammers.com/library/mdi/
  - まず、Todo 用のアイコン
    - 検索窓に todo 入力で相応しいアイコンを検索(または list checks で出てくる)
    - アイコンの名前を確認　 format-list-checks なので
    - ファイル script 内 items 配列の todo の icon 部分を icon: 'mdi-format-list-checks'に変更する

## 3：各ページの詳細設定

- **views/AboutView.vue(About ページ：テキスト編集)**
  - まず適当に h3 と p タグ lorem で余白をチェックする
  - styles~/spacing で余白の表記方法を確認 https://v2.vuetifyjs.com/en/styles/spacing/
  - 先頭の div class="about"に pa-6 を追加
- **views/HomeView.vue(Todo ページ：ファイル名変更)**
  - これを TodoView.vue に変更すると、一時的にファイルがエラーになるので
- **src/router/index.js(Todo ページ：Home 系を Todo 系に変更)**
  - import HomeView〜../views/HomeView~の HomeView 部分を TodoView に変更
  - const routes の配列定義内の path:'/'の name:'home'から name：'todo'へ,component: HomeView から component: TodoView へ変更

## 4:使用しないファイルの削除 components/HelloWorld.vue は削除可能(今回はコメントアウトとファイル温存で一旦対応)

- src/components ディレクトリごと削除 OK
- 読み込んでいる部分の削除も OK
  - TodoView.vue 内の template 内、script のヘッダー内と export 内の３箇所

## 5:中央ナビゲーションメニューパネルの編集

- **src/App.vue(v-app-bar タグ)**
  - https://v2.vuetifyjs.com/en/components/app-bars/
  - bar 選択肢から Images を選択 https://v2.vuetifyjs.com/en/components/app-bars/#images
  - サイト script の<>から v-app-bar タグを含んでコピー
  - ファイルの v-app-bar 部分をペーストで上書き
  - **直下の absolute を削除して app を記述して上書き**すると、bar で隠れていた app コンテンツのトップが下がって表示されるようになる(bar の margin buttom の設定は必要ない)
  - shrink-on-scroll,scroll-target="#scrolling-techniques-2" は削除
  - props で prominet を確認　https://v2.vuetifyjs.com/en/api/v-app-bar/#props
  - src の下に prominent を追加記述
  - color="#fcb69f"を、color="primary"に上書き
  - src の画像を sea.jpg に変更　（変更前はhttps://picsum.photos/1920/1080?random）
  - v-app-bar-title を、{{ mainTitle }}に変更
  - navicon をクリックした時の event 処理を設定するため
  - v-app-bar-nav-icon タグに@click="drawer = !drawer"を追記

## 6:Todo ページのコンテンツ編集

- **src/views/TodoView.vue(viewUI をコピペ)**
  - ui/lists でチェックボックス仕様を確認　https://v2.vuetifyjs.com/en/components/lists/#subheadings-and-dividers
  - サイト script タグの v-divider の次の v-list タグを含む部分をコピー
  - ファイルの h1 タグ Todo Page をペーストで上書き
- **src/views/TodoView.vue(機能の削除)**
  - 複数選択機能を削除する：リスト上部に位置する v-list-item-group v-model="settings" multiple タグを削除
  - サブヘッダーのテキストを削除：v-subheader タグを削除
  - デフォルトの 4 つのリストを一旦 1 つに減らす
  - リストのサブタイトルを削除し高さも調整：v-list-item-subtitle タグを削除し、v-list タグ内の subheader と two-line を削除する
- **src/views/TodoView.vue(カスタム編集)**
  - リストの項目のテキスト編集：v-list-item-title を好みのテキストに上書き
  - script タグ内の export default 内に data 関数 を return と配列で追加し、リストの内容として id と title テキストを入力しておく
  - それを呼び出して描画させるために template の親要素である v-list-item タグ内に v-for を配置
  - 複数ある task を id で間違いなく指定する:key="task.id" を配置
  - 一旦記入していたリストの直書きテキスト v-list-item-title を tasks から読み込ませるための書き換え：{{ task.title }}で上書きする
