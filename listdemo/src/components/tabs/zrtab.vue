<template>
  <div>
    <van-tabbar v-model="currentSelected" :inactive-color="placeholderColor" :active-color="selectColor" placeholder safe-area-inset-bottom>
      <template v-for="(item, idx) in tabArrays" :key="idx">
        <van-tabbar-item :to="item.route" :dot="item.dot" :badge-props="getBadge(item.badge)">
          <span>{{item.title}}</span>
          <template #icon="props">
            <van-image :src="props.active ? item.selected : item.select"/>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script>
import {Tabbar, TabbarItem, Image} from 'vant'
import { onBeforeMount, onMounted, onUpdated, ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "zr-tabbar",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Image.name]: Image,
  },
  props: {
    // badgeShowZero: {
    //   type: Object,
    //   default: () => ({
    //     "show-zero": false,
    //   })
    // },
    tabArrays: {
      type: Array,
      default: () => [
        // ********************************************参数示例********************************************
        // {"select": require('./icons/icon-default-no-0.png'), "selected": require('./icons/icon-default-yes-0.png'), "title": "one", "route": "/zr1", "dot": true},
        // {"select": require('./icons/icon-default-no-1.png'), "selected": require('./icons/icon-default-yes-1.png'), "title": "two", "route": "/zr2", "badge": "3"},
        // {"select": require('./icons/icon-default-no-2.png'), "selected": require('./icons/icon-default-yes-2.png'), "title": "three", "route": "/zr3", "badge": "0"},
        // {"select": require('./icons/icon-default-no-3.png'), "selected": require('./icons/icon-default-yes-3.png'), "title": "four", "route": "/zr4"},
      ]
    },
    selectedIndex: {
      type: Number,
      default: 1
    },
    placeholderColor: {
      type: String,
      default: "#808080"
    },
    selectColor: {
      type: String,
      default: "#3D7EFF"
    }
  },
  data() {
    return {
      currentSelected: this.selectedIndex,
    }
  },

  methods: {
    getBadge(number) {
      return {
        "show-zero": false,
        "content": parseInt(number)
      }
    }
  },

  setup(props) {
    console.log("zrtab 页面开始加载")

    onMounted(() => {
      const router = useRouter()
      if(router.currentRoute.value.path == '/') {
        let defaultValue = props.tabArrays[props.selectedIndex].route
        router.push({ path: defaultValue })
      }
      console.log(router.currentRoute.value.path)
    })

    return {
    }
  }
}
</script>

<style>

</style>