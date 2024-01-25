## 1:ワイヤーフレームの選定

- https://v2.vuetifyjs.com/en/getting-started/wireframes/
- Base バージョンで決定、右下オクトキャットをクリック　https://v2.vuetifyjs.com/en/examples/wireframes/base/
- ソースコードを取得、コピー
- **src/App.vue**にペースト、動作確認

## 2:ナビゲーションメニューの設定

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
- **src/App.vue(アイコン編集)**
  - ui/icons https://v2.vuetifyjs.com/en/components/icons/
  - のテキスト部分 MaterialDesignIcons をクリック
    https://pictogrammers.com/library/mdi/
  - まず、Todo 用のアイコン
    - 検索窓に todo 入力で相応しいアイコンを検索(または list checks で出てくる)
    - アイコンの名前を確認　 format-list-checks なので
    - ファイル script 内 items 配列の todo の icon 部分を icon: 'mdi-format-list-checks'に変更する
