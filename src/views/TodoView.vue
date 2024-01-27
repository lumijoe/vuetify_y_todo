<template>
  <div class="home">
    <v-list
      subheader
      two-line
      flat
    >
      <!-- <v-subheader>Hangout notifications</v-subheader> -->

      <!-- <v-list-item-group
        v-model="settings"
        multiple
      > -->
        <v-list-item>
          <template v-slot:default="{ active, }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        
      <!-- </v-list-item-group> -->
    </v-list>
  </div>
  <!-- <hello-world /> -->
</template>

<script>
  // コンポーネントの読み込みも可能import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    // components: {
    //   HelloWorld,
    // },コンポーネントの読み込みも可能
  }
</script>
