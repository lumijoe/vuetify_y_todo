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
  -
