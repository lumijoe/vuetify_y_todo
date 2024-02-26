import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: '銀行記帳' ,
        done: false
      },
      {
        id: 2,
        title: '計算' ,
        done: false
      },
      {
        id: 3,
        title: 'アプリ入力' ,
        done: false
      },
      {
        id: 4,
        title: 'アプリ編集' ,
        done: false
      },
      {
        id: 5,
        title: 'バックアップメンテ' ,
        done: false
      },
      {
        id: 6,
        title: 'パーテーション戻す' ,
        done: false
      },
      {
        id: 7,
        title: 'ターミナルショートカット設定' ,
        done: false
      },
      {
        id: 8,
        title: 'asana入力' ,
        done: false
      }
    ]
  },
  mutations: {
    // 追加機能
    addTask(state, newTaskTitle) {
      // console.log('addTask');
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      }
      state.tasks.push(newTask)
      // this.newTaskTitle = ''
    },

    // 完了済み機能
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },

    // 削除機能
    deleteTask(state, id) {
        state.tasks = state.tasks.filter(task => task.id !== id)
      }
  },
  actions: {
  },
  getters: {
  }
  // modules: {
  // }
})
