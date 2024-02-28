<template>
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>
</template>

<script>
export default {
  data() {
      return {
        newTaskTitle: '',
        // tasks: [
        //   {
        //     id: 1,
        //     title: '銀行記帳' ,
        //     done: false
        //   },
        //   {
        //     id: 2,
        //     title: '計算' ,
        //     done: false
        //   },
        //   {
        //     id: 3,
        //     title: 'アプリ入力' ,
        //     done: false
        //   }
        // ]
      }
    },
    methods: {
      // addTask() {
      //   // console.log('addTask');
      //   let newTask = {
      //     id: Date.now(),
      //     title: this.newTaskTitle,
      //     done: false
      //   }
      //   this.tasks.push(newTask)
      //   this.newTaskTitle = ''
      // },
      addTask() {
        this.$store.commit('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      }
    },

}
</script>

<style>

</style>