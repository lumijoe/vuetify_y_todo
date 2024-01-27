<template>
  <div class="home">
    <v-list
      flat
    >
      <!-- <v-subheader>Hangout notifications</v-subheader> -->

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
        <v-list-item>
          <template v-slot:default="{ active, }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
              <!-- <v-list-item-subtitle>Allow notifications</v-list-item-subtitle> -->
            </v-list-item-content>
          </template>
        </v-list-item>
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
            title: '銀行記帳' 
          },
          {
            id: 2,
            title: '計算' 
          },
          {
            id: 3,
            title: 'アプリ入力' 
          },
        ]
      }
    }

    // components: {
    //   HelloWorld,
    // },コンポーネントの読み込みも可能
  }
</script>
