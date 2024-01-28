## 開発環境---Vue は CLI で。vuetify で create 　 app する。

- **desktop で**
- node --version、node.js がインストールされているか Version を確認
- touch memo.md、手順を記述するためのファイルを作成
- node v16.20.2 がインストール済み
- npm install -g @vue/cli、vue を CLI で開発するためローカルにインストールする
  - ERR! code EACCES が出たら管理者権限で再インストールが必要　 sudo npm install -g @vue/cli で実行
  - password はローカル PC 起動時のもの
  - 脆弱性が発見されたら vunlnerabilities が 0 でなければ
    - npm audit fix --force で、セキュリティ情報の詳細を確認と自動修正をさせる
    - それでも ERR!が出れば npm install で package-lock.json を自動生成してから npm audit fix --force を実行
    - found 0 vulnerabilities になれば OK
- vuetify ページ参考　https://vuetifyjs.com/en/で、vue create でディレクトリを生成する
- vue create アプリ名をターミナルで実行し、カスタムでセットアップをしていく
  - 最初は Manually select features を選択
  - radio ボタンで Babel, Router, Vuex, CSS Pre-processors を選択する（Linter / Formatter は選択外にする）
  - Vue.js version をここで 2.x を選択
  - history mode for router は No なので n を入力
  - CSS pre-processor は Sass/SCSS(with dart-sass)を選択
  - config は　 In dedicated config files を選択
  - preset for future projects は No なので、n を入力
- success で生成できたら cd でディレクトリに移動
- **vuetify_y_todo で作業する前に、Github リモートリポジトリ作成**
- 作業工程を Github が監視しているので、作業前に設定しないと Warn が出やすくなるため
- touch .gitignore で生成し、/node_modules/を記述(作成時に記述されていることもある)
- git init, git add ., git commit -m "first commit"
- リモートリポジトリを Github で作成し、URL を確認
- git remote add origin https://github.com/lumijoe/vuetify_y_todo.git
  git branch -M main
  git push -u origin main で、ローカルリポジトリ、リモートリポジトリが連携される
- Github の Settings の pages で Branch 設定で main が新規作成されているので、main で save し設定
- Actions で走りを確認、エラーチェックなど、異常なければ次の作業へ

- **vuetify の導入**
- vue add vuetify で、vuetify をインストール
- ここで問題があれば、github との連携を先に済ませる
- choose a preset は recommended を選択
- successfully が表示されたら package.json ファイルをチェック
- package.json の dependencies の vuetify と、script の serve と build を確認する
- 起動コマンドの確認　 npm run serve

- **MaterialDesignIcons の導入**
- https://pictogrammers.com/library/mdi/

- **拡張機能：VS Sequential Number(数字の自動入力)の導入**
- 入力したい行を複数選択：option+行をクリック
- cmd+shift+p：コマンドパレットを開く
- パレットに入力：Sequential Number: Insert
- Enter で自動入力される

- **拡張機能：Vetur(ディレクティブ推奨メッセージ)の導入**
- するも、他の volar や githubservice 推奨も試すが npm audit がうまくいかず一旦全て導入見送る

- **拡張機能：devtools の Chrome ストアで Vue.js Devtools の導入**
- イベントの確認や状態管理が確認できる
- chrome に追加しても detective えラーの場合はファイル許可を on にして npm run serve 再起動する
- タブに vue が反映される

## 起動

- npm run serve で起動
- localhost でブラウザ表示確認できれば起動成功

## 0128

sec5:vuex 3:38/4:59
**日本語入力の変換決定の enter と、実行の enter の区別が必要**
**モバイルのタップがブラウザのエンターとイコールではない動作**
