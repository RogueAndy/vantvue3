<template>
  
</template>

<script>
import { onMounted } from 'vue'
import { List } from 'vant'

export default {
  components: {
    [List.name]: List
  },

  props: {
    loading: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    },
    noMoreTips: {
      type: String,
      default: '没有更多数据了'
    }
  },

  setup() {

  }
}
</script>
