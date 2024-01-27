<template>
  <div class="home">
    <v-list
      class="pt-0"
      flat
    >
      <!-- <v-subheader>Let's Do This 😃</v-subheader> -->

      <!-- <v-list-item-group
        v-model="settings"
        multiple
      > -->
      <div
        v-for="task in tasks"
        :key="task.id"
      >
      <!-- <v-list-item
          v-for="task in tasks"
          :key="task.id"> -->
        <v-list-item
          @click="doneTask(task.id)"
        >
          <!-- <template v-slot:default="{ active, }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox> -->
            <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
              <!-- <v-list-item-subtitle>Allow notifications</v-list-item-subtitle> -->
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider>
       
        
      </div>

        
      <!-- </v-list-item-group> -->
    </v-list>
  </div>
  <!-- <hello-world /> -->
</template>

<script>
  // コンポーネントの読み込みも可能import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',
    data() {
      return {
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
        ]
      }
    },
    methods: {
      doneTask(id) {
        // console.log('id: ', id)
        let task = this.tasks.filter(task => task.id === id)[0]
        task.done = !task.done
      }
    }

    // components: {
    //   HelloWorld,
    // },コンポーネントの読み込みも可能
  }
</script>
