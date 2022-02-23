<template>
  <van-list v-model:loading="loading"></van-list>
</template>

<script>

import { List } from 'vant'
export default {
  components: {
    [List.name]: List
  },
}
</script>
