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
- **src/views/TodoView.vue(リストの UI カスタム編集)**
  - ui/dividers でシンプルなディバイダーを確認し<>コピー　https://v2.vuetifyjs.com/en/components/dividers/#usage
  - v-list-item が for で繰り返される前に(item の後ろにディバイダーを表示して for で繰り返す)を描画するために item を括る親 div を追加し、div の中で item+ディバイダーを繰り返す構造を作る。v-list-item タグから v-for や key 属性は削除して div に付け替える。
  - list の先頭の padding-top だけ余白があり、テキストが中央値に来ていないので v-list タグで pt-０を追加
- **scr/view/TodoView.vue(チェックボックスのカスタム機能)**
  - export default の tasks 配列に done の場合を追加する：done: false にして、実験的に 1 つは true にしてリロードされてもチェックが入ったままかを確認する
  - template タグの v-slot:default の active を削除し
  - 実験的に記述した done: true 部分を done: false にしてリロードしたらチェックが外れるかを確認：これをクリックで制御するようにするために
  - v-list-item に@click="task.id"を記述する。key である id がクリックされたら、こうする、を methods で処理するために
  - export default の data,の下に methods を追加
  - id が読み込まれているかを console.log で確認するために一旦記述し、確認できたら削除する
  - チェックボックスを定義：v-checkbox の:input-value="task.done"と上書きし、task.done の値が入るようにする。
  - task.done が完了だと定義するために、クリックされたら doneTask を実行することを methods で定義するため
  - methods: {doneTask(id){~}}で完了状態を切り替えるコードを追加する
- **src/view/TodoView.vue(リスト task.done や more UI カスタム編集)**
  - doneTask したリストの背景色だけを変更する styles~/colors で確認https://v2.vuetifyjs.com/en/styles/colors/
  - v-list-item タグの@click="doneTask..."の次に:class="{ 'blue' : task.done }"を記述。カラーは参考まで。
  - 加えて doneTask のテキスト(title に対して)も削除線描画に変更する　 styles~/text and~でで decoration(line-thirough text)を確認https://v2.vuetifyjs.com/en/styles/text-and-typography/#decoration
  - v-item-title タグに:class="{ 'text-decoration-line-through' : task.done }"を記述(task.done に対してのみクラスを当て削除線を表示させる)
- **src/view/TodoView.vue(リストそのものを表示から削除する機能の追加)**
  - リストの右側にゴミ箱アイコンを表示し、それをクリックするとリストそのものが表示から削除される機能を追加するため
  - リスト右側にアイコンを配置させるコードを確認 ui/lists https://v2.vuetifyjs.com/en/components/lists/#two-lines-and-subheader
  - <>の v-list-item-action タグをコピーして一旦 information のアイコンを記述する位置として
  - /template タグの手前にペーストして配置
  - アイコンを削除イメージのゴミ箱アイコンに変更するため
  - ui/icons https://v2.vuetifyjs.com/en/components/icons/
  - のテキスト部分 MaterialDesignIcons をクリック
    https://pictogrammers.com/library/mdi/
  - 検索バーで delete を入力し、アイコン名 delete を選択
  - ファイル v-icon タグにデフォルトで入っている mdi-information を、mdi-delete に上書きする
  - icon のカラーを指定：v-icon color="gray..."gray を primary などに変更
  - icon をクリックした時の処理：v-btn タグに@click.stop を追加して
  - exportdefault の methods に deleteTask(id) {this.tasks = this.tasks.filter(task => task.id !== id)} を追加する
- **src/view/TodoView.vue(リストの新規追加機能:UI の構築)**
  - フォームの確認 ui/form inputs~ でテキスト入力と追加ボタンのアイコンが配置できるものを確認　https://v2.vuetifyjs.com/en/components/text-fields/#icons
  - <>で、下から２番目の右シンプルなデザイン v-text-field タグ　 outlined 　 label="Append"　 append-icon="mdi-map-marker"を選択してコピー
  - v-list の上部に表示させたいので、ファイルの v-list の手前に配置
  - padding を調整：v-text-field タグに class="pa-3"を追加
  - label のテキストを Add Task などに変更して上書き
  - append-icon を新規追加ボタンに適したものを選択するため
  - ui/icons https://v2.vuetifyjs.com/en/components/icons/
  - のテキスト部分 MaterialDesignIcons をクリック
    https://pictogrammers.com/library/mdi/
  - 検索バーで add と入力、icon 名 plus を確認
  - ファイルのデフォルト icon 名の部分、mdi-map-marker を mdi-plus に変更して上書き
  - フィールドまわりの余計なスペースを無くしたいので、一旦何が当たっているのかを devtools で確認すると details というものが当たっていることが確認できる。details を削除するには props の可能性あり、props を検索してみる
  - テキストフィールドの API を確認https://v2.vuetifyjs.com/en/components/text-fields/#api
  - text-fields-api をクリックhttps://v2.vuetifyjs.com/en/api/v-text-field/#links
  - props の下の方の hide-details 　を確認https://v2.vuetifyjs.com/en/api/v-text-field/#props-hide-details
  - ファイルの v-text-field タグの icon の下に hide-details だけ追加すると details が非表示になり余分なスペースが削除される
- **src/view/TodoView.vue(リストの新規追加機能：処理の構築)**
  - 入力した文字をクリアにできる機能：v-text-field タグ に clearable を追加　https://v2.vuetifyjs.com/en/api/v-text-field/#props-clearable
  - 入力した文字を新規タイトルとして反映させる：v-text-field タグに v-model="newTaskTitle"を追加し、
  - export default の return の tasks 配列の手前に：newTaskTitle: 'hello',を一旦入力し、確認できれば''だけにする
  - 新規追加テキストを入力したらボタンをクリックして、それを newTaskTitle に反映させる処理をするには、v-text-field API の event の click:append を確認するhttps://v2.vuetifyjs.com/en/api/v-text-field/#events-click:append
  - ファイルの v-text-field に@click:append="addTask"を追記して
  - export default の methods:のトップに addTask を追加させる console.log('addTask')で一旦確認
  - v-text-field タグ内の@click の下に@keyup.enter="addTask"を追加し、クリックしたら addTask のイベントを処理する指示を emthods で記述するため
  - export default の methods の addTask() {}の console.log 部分を let newTask = {id: Date.now(),title: this.newTaskTitle,done: false}this.tasks.push(newTask)に上書きし、tasks 配列と同じ項目にする
  - 入力してリストが追加されると同時に入力フォームに入力したテキストが残っているものを自動でクリアするために、this.newTaskTitle = ''を追加する
- **src/view/TodoView.vue(新規追加から描画させる処理に変更する)**

  - 一旦入力しているデフォルトテキストである tasks 配列の中身は、一例なのでユーザーが欲しい情報だけを描画するために、デフォルトテキストを一旦コメントアウトする。tasks:[//]中身をコメントアウト
  - リストがクリアな状態で新規追加入力をしても、保存はされないことを確認、リロードしたら情報が保存されていないことがわかる。保存するために
  - v-list タグに v-if="tasks.length"を追加し配列があればを定義し、そのタグの次のタグとして div タグを配置、その div タグに v-else で No tasks と表示されるようにテキストを一旦追加して表示されるかを確認
  - 確認できればテキスト表示を スタイリングするため
  - styles~/text~ で h5 を確認https://v2.vuetifyjs.com/en/styles/text-and-typography/
  - ファイルの No tasks を div で括り class="text-h5 primary--text"を記述することでテキストサイズと文字色を変更する
  - icon でも表示したいところだが icon がデフォルトでないため上書きすることができないパターン。の場合、まず icon 配置ができるコードをコピーする ui/icons https://v2.vuetifyjs.com/en/components/icons/#examples
  - v-icon タグをファイルの No tasks の上に配置させ icon 表示を確認できたら
  - ui/icons https://v2.vuetifyjs.com/en/components/icons/
  - のテキスト部分 MaterialDesignIcons をクリック
    https://pictogrammers.com/library/mdi/
  - 検索バーで check を入力して相応しいファイル名 check を確認
  - ファイルの v-icon タグの mdi-domain を mdi-check に、color を green から primary に上書きする
  - size を変更する：ui/v-icon API の props size を確認するhttps://v2.vuetifyjs.com/en/api/v-icon/#props-size
  - ファイルの v-icon の props large を削除し size="100"で上書きする
  - icon とテキストをページの中央に寄せるために親要素の v-else がついている div タグに class="no-tasks"を追加する
  - no-tasks をスタイル登録するために、script タグの下に style タグを記述する
  - .no-tasks の中身を記述で、中央に opacity50%で表示される

- **src/store/index.js(クライアントでの状態管理を可能にする Vuex)**

  - デフォルトテキストでなく、入力、表示などの状態で描画する方法へ UI を変更するために
  - 今回は export default の state: mutations: actions: getters:が必要で、modules:は削除する。ないものは追加する
