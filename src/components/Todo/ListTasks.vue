<template>
  <!-- <v-list
      v-if="$store.state.tasks.length"
      class="pt-0"
      flat
    > -->
  <v-list
      class="pt-0"
      flat
    >
    
      <!-- メッセージ表示 -->
      <v-subheader>Let's Do This 😃</v-subheader>
      
      <!-- タスクの繰り返し表示 -->
      <div
        v-for="task in $store.state.tasks"
        :key="task.id"
      >
    
        <!-- リストアイテムの表示設定 -->
        <v-list-item
            @click="$store.commit('doneTask', task.id)"
            :class="{ 'blue lighten-5' : task.done }"
        >
          
          <!-- リスト機能の設定 -->
          <template v-slot:default>
            <!-- デフォルト時 -->
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>
            
            <!-- 完了時 -->
            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through' : task.done }"
              >
              {{ task.title }}
              </v-list-item-title>
              <!-- <v-list-item-subtitle>Allow notifications</v-list-item-subtitle> -->
            </v-list-item-content>
            
            <!-- 削除時 -->
            <v-list-item-action>
              <!-- 削除ボタン、アイコン -->
              <v-btn
                @click.stop="$store.commit('deleteTask', task.id)"
                icon
              >
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>

        </v-list-item>
        <!-- ディバイダー -->
        <v-divider></v-divider>
      </div> 
    </v-list>
</template>

<script>
export default {

}
</script>

<style>

</style>