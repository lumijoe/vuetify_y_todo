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
      }
    ]
  },
  mutations: {
    addTask(state, newTaskTitle) {
      // console.log('addTask');
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      }
      this.tasks.push(newTask)
      // this.newTaskTitle = ''
    },
  },
  actions: {
  },
  getters: {
  }
  // modules: {
  // }
})
