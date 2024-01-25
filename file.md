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
  - 修正タグの permanent を削除
  - v-navigation-drawer の後ろに、v-model="drawer" app を追加
