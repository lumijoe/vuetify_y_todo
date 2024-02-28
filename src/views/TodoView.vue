<!-- ==========================================
  template
============================================-->
<template>
  <!-- ページ：home -->
  <div class="home">
    

    <!---------------------------------------
      入力フォーム 
    ---------------------------------------->
    <!-- コンポーネント化したfield-add-task
          scriptでimportし、components処理でコンポーネント名を登録
        　templateタグ内でhtmlタグにすることでUIとして描画される -->
    <field-add-task />
   
    
      <!-- このコードはsrc/components/Todo/FieldAddTask.vueのコンポーネントとなる 
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
    ></v-text-field>-->
    <!-- -------------------------------- -->



    <!--------------------------------------- 
      フォーム下リスト 
    ---------------------------------------->
    <!-- リスト -->
    <!-- このコードはsrc/components/Todo/ListTasks.vueのコンポーネントとなる -->
    <list-tasks
      v-if="$store.state.tasks.length"
    />
    <!--  
    <v-list
      v-if="$store.state.tasks.length"
      class="pt-0"
      flat
    >-->
    
      <!-- メッセージ表示 -->
      <!-- <v-subheader>Let's Do This 😃</v-subheader> -->
      
      <!-- タスクの繰り返し表示 -->
      <!-- <div
        v-for="task in $store.state.tasks"
        :key="task.id"
      > -->
    
        <!-- リストアイテムの表示設定 -->
        <!-- <v-list-item
            @click="$store.commit('doneTask', task.id)"
            :class="{ 'blue lighten-5' : task.done }"
        > -->
          
          <!-- リスト機能の設定 -->
          <!-- <template v-slot:default> -->
            <!-- デフォルト時 -->
            <!-- <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action> -->
            
            <!-- 完了時 -->
            <!-- <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through' : task.done }"
              >
              {{ task.title }}
              </v-list-item-title> -->
              <!-- <v-list-item-subtitle>Allow notifications</v-list-item-subtitle> -->
            <!-- </v-list-item-content> -->
            
            <!-- 削除時 -->
            <!-- <v-list-item-action> -->
              <!-- 削除ボタン、アイコン -->
              <!-- <v-btn
                @click.stop="$store.commit('deleteTask', task.id)"
                icon
              >
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>

        </v-list-item> -->
        <!-- ディバイダー -->
        <!-- <v-divider></v-divider>
      </div> 
    </v-list> -->
    <!-- -------------------------------- -->



    <!---------------------------------------
      タスクがリストにない場合のUI 
    ---------------------------------------->
    <div 
      v-else 
      class="no-tasks"
    >
      <v-icon
        size="100"
        color="primary"
      >
        mdi-check
      </v-icon>

      <div class="text-h5 primary--text">No tasks</div>
    </div>
    <!-- -------------------------------- -->



  </div>
  <!-- ページ：home -->
</template>



<!-- ==========================================
  script
============================================-->

<script>
  // Hello world
  // コンポーネントの読み込みも可能import HelloWorld from '../components/HelloWorld'
  import FieldAddTask from '@/components/Todo/FieldAddTask.vue'
  

  export default {
    name: 'Home',
    components: {
      'field-add-task': require('@/components/Todo/FieldAddTask.vue').default, 
      'list-tasks': require('@/components/Todo/ListTasks.vue').default
    }
  }
</script>



<!-- ==========================================
  style
============================================-->

<style lang="sass">
  .no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>
