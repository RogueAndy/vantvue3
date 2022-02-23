<template>
  <div class="main">
    <router-view>
    </router-view>
    <div>
      <zrtab :tabArrays="tabs" :selectedIndex="selectIndex"></zrtab>
    </div>
    
  </div>
</template>

<script>
import zrtab from '@/components/tabs/zrtab'
import { onMounted } from 'vue'

export default {
  components: {
    zrtab
  },
  data() {
    return {
      selectIndex: 3,
      tabs: [
        {"select": require('@/components/tabs/icons/icon-default-no-0.png'), "selected": require('@/components/tabs/icons/icon-default-yes-0.png'), "title": "首页", "badge": 0, "dot": true, "route": "/one"},
        {"select": require('@/components/tabs/icons/icon-default-no-1.png'), "selected": require('@/components/tabs/icons/icon-default-yes-1.png'), "title": "新闻", "badge": 2, "route": "/two"},
        {"select": require('@/components/tabs/icons/icon-default-no-2.png'), "selected": require('@/components/tabs/icons/icon-default-yes-2.png'), "title": "消息", "badge": 5, "route": "/three"},
        {"select": require('@/components/tabs/icons/icon-default-no-3.png'), "selected": require('@/components/tabs/icons/icon-default-yes-3.png'), "title": "我的", "badge": 0, "route": "/four"},
      ]
    }
  },
  methods: {

  },
  setup(props, context) {
    console.log('tabs的setup方法')

    onMounted(() => {
      console.log('~~~~~~~~~~')
      // console.log(this.testIndex)
    })
  }
}


</script>

<style>
.main {
  width: 100%;
  height: 100vh;
}
.navigation {
  width: 100%;
  height: 64px;
  background: orange;
}

.content {
  width: 100%;
  /* height: calc(100% - 64px - 50px); */
  height: auto;
  background: blue;
}

/* .tab {
  width: 100%;
  height: 50px;
  background: pink;
} */

</style>