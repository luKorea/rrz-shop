import { localCache } from '@/utils/localCache'
import { defineStore } from 'pinia'
import { ref } from 'vue'
const userStore = defineStore('user', () => {
  const initState = ref({
    token: null,
    userInfo: {
      avatar: require('@/assets/image/common/avatar.png'),
      username: '租币当钱花',
      purse: null,
      isSign: false
    }
  })

  function initLocalStorage() {
    const token = localCache.getCache('token')
    const userInfo = localCache.getCache('userInfo')
    if (token && userInfo) {
      initState.value.token = token
      initState.value.userInfo = userInfo
    }
  }

  return {
    initState,
    initLocalStorage
  }
})

export default userStore
