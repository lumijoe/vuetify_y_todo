## 1:ワイヤーフレームの選定

- https://v2.vuetifyjs.com/en/getting-started/wireframes/
- Base バージョンで決定、右下オクトキャットをクリック　https://v2.vuetifyjs.com/en/examples/wireframes/base/
- ソースコードを取得、コピー
- **src/App.vue**にペースト、動作確認

## 2:ナビゲーションメニューの設定

- https://v2.vuetifyjs.com/en/components/navigation-drawers/#usage
- <>マークより一部(v-card タグの中身だけ)をコピー
- **src/App.vue**
  - 途中 v-navigation-drawer タグにペースト修正する
  - ペーストのタグ内の permanent を削除
  - v-navigation-drawer の後ろに、v-model="drawer" app を追加(ナビゲーションが表示非表示される)
  - items の not defined エラーを解消するべく定義するには
  - items を script の data 内で定義するため
  - vuer<>コードの script、items の配列部分をコピーhttps://v2.vuetifyjs.com/en/components/navigation-drawers/#usage
  - ナビ items, title, subtitle のテキストを編集
- **src/router/index.js**
  - ナビカテゴリのリンク先を設定するには
  - const routes の path は URL を、component はファイル名を表していることを確認
  - /about を追加しても表示がされないので
  - デフォルトのアプリケーションマークアップ設定方法をサイトで確認 ui/application https://v2.vuetifyjs.com/ja/components/application/#section-30c730d530a930eb30c8306e30a230d730ea30b130fc30b730e730f330de30fc30af30a230c330d7
  - if using vue-router をチェックし v-main タグ内で router-view タブが必要なことを確認
- **src/App.vue**
  - v-main タグ内に router-view を記述すると
  - views ディレクトリ内の.vue を router ディレクトリの index.js を経由し,components ディレクトリ内のファイルも読み込み、描画される。
  - URL に/about を追加して描画エラーの有無を確認する
